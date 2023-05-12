const Conversation = require("../models/Conversation");
const message = require("../models/Message");
const express = require('express');
const app = express()
let http = require('http').Server(app);
const io = require('socket.io')(http);
const Message = require("../models/Message");
const format =  require('node-time-ago')




exports.conversation = async(req,res) => {

    const newConversation = new Conversation({
        members :[req.body.senderId,req.body.receiverId],
        postId :req.body.postId
     })

    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
        
    } catch (error) {
        res.status(500).json(error)   
    }
}

//check if conversation has started
exports.checkConvesation = async(req,res) => {
    try {
        conversationId = req.params.conversationId
        const validateConversation = await Conversation.updateOne({chatCreated:false, _id: conversationId},{
            $set :{chatCreated : !false}
        })
        res.status(200).json(validateConversation)
    } catch (error) {
        res.status(500).json(error)   
    }
}


exports.getConversation = async(req,res) => {

    try {
        const getConversation = await  Conversation.find({chatCreated: true,
            members: {$in : [req.params.userId]}
        })
        res.status(200).json({getConversation})
        
    } catch (error) {
        res.status(500).json(error)   
    }
}

//get all conversations 
exports.getUsersConversation = async(req,res) => {
    try {
        const userId = req.params.userId
        const postId = req.params.postId
        const currentUserId = req.params.currentUserId
        const  getConversations= await Conversation.findOne({postId:postId,members :{$all:[currentUserId,userId]}})
        res.status(200).json(getConversations)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get conversation by user Id  API
exports.getConversationByUserId = async(req,res) => {
    try {
        const userId = req.params.userId
        const  conversationById= await Conversation.find({chatCreated: true, members :{$in:[userId]}})
        res.status(200).json(conversationById)
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET MESSAGE WITH CONVERSATION AND USER ID
exports.getMessageWithConversation = async(req,res) => {
    try {
        const conversationId = req.params.conversationId
        const userId = req.params.userId
        const getMessageSent = await Message.find({$and: [{sender:{$ne : userId}},{read:false},{conversationId: conversationId}]})
        res.status(200).json(getMessageSent)
    } catch (error) {
        res.status(500).json(error)  
    }
}

exports.message = async(req,res) => {
    const newMessage = new Message(req.body)

    //capture this message and send to a mail address of the receiver. i will build an api that would be called and message is passed 
    //to delibvere a mail
    try {
        const savedMessage = await newMessage.save()
       
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(500).json(error)  
    }
}


exports.getmessage = async(req,res) => {
    try {
        const getdMessages = await Message.find({
            conversationId : req.params.conversationId})
        res.status(200).json({getdMessages})
        
    } catch (error) {
        res.status(500).json(error)  
    }
}

//UPDATE MESSAGE AS TRUE IF READ to route conversation
exports.updateMessageRead = async(req,res) => {
    try {
        const messageId = req.params.messageId
       const updatedMessage =await Message.findOneAndUpdate({_id : messageId,read: false},{read:true})
        res.status(200).json({updatedMessage})
        console.log(updatedMessage)
    } catch (error) {
        res.status(500).json(error)  
    }
}

exports.userConversation = async(req,res) => {
    try {
        const conversationId = req.params.conversationId
        // const userId = req.params.userId
        const postId = req.params.postId
        const getNewChat = await Message.find({$and: [{conversationId: conversationId},{postId: postId}]})
             res.status(200).json(getNewChat)
    } catch (error){
        res.status(500).json(error)  
    }
}

exports.getLastInsertedMessage = async(req,res) => {
    try {
        const lastdMessage = await Message.findOne({
            sender : req.params.userId}).sort({$natural : -1}).lean()
        res.status(200).json({lastdMessage})
    } catch (error) {
        res.status(500).json(error)  
    }
}