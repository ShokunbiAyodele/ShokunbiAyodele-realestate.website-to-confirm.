const Post = require("../models/Post");
const express = require('express')
const UserChats = require("../models/Chats");
const app = express()
let http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios')
const format =  require('node-time-ago')

const uploadToCloudinary = require("../middleware/cloudinary");
const {DeleteImageCloudinary } = require("../helper/helper");
const User = require("../models/User");


module.exports = {

    //get user post by Id API
    getUserPost : async(req,res) => {
       const postId = req.params.postId
        // const userId = req.params.userId
        try {
            const userPost =await Post.findOne({_id : postId})
            res.status(200).json(userPost)
        } catch (error) {
            console.log(error)  
        }

    },

    viewProperty : async(req,res) => {
        try {
            const getPosts = await Post.find({user : req.user.id}).lean()
            res.render('user/showuseradd.ejs',{useradd : getPosts, userProfile : req.user.id})
        } catch (error) {
            console.log(error)
        }
    },

    deletePost : async(req,res) => {
        try {
            const postId =req.params.id
            const currentPost =await Post.findById({_id : postId})
            const imagePublicaId = currentPost.image_publicIds
            imagePublicaId.array.forEach(publicId => {
                  //destroy present image in cloudinary
              DeleteImageCloudinary(publicId)
            });
          const deleteResult =  await Post.findOneAndDelete({_id : postId})
          if(deleteResult){
            res.status(200).json({msg: 'add has been deleted'})
          res.redirect("/viewPostedProperty/"+ req.user.id);
        }
        } catch (error) {
            console.log(error)
        }
    },
    updatelike : async(req,res)=> {
        try {
            await Post.findOneAndUpdate(
                { _id: req.params.postId },
                {
                  $inc: { likes:1 },
                }
              );
              console.log("Likes +1");
            //   res.redirect(`/getPostDetails?id=${req.params.id}`);
            const getSinglePost = await Post.findOne({_id : req.params.postId})
            res.status(200).json({like: getSinglePost.likes})
            
        } catch (error) {
            console.log(error)
        }

    },
    getUserMobileNumber : async(req,res)=> {
        try {
            postUserDetails= await User.findOne({ _id: req.params.userId})
            res.status(200).json({mobile: postUserDetails.phoneNumber})

        } catch (error) {
            console.log(error)
        }

    },

    viewpeoplechat : async(req,res) => {
        try {
            const userId = req.params.id
            
            //call api to get new message from user and signify.
            const response =await axios.get('http://localhost:3000/conversation/'+ userId);
            const dataResponse = response.data.getConversation
            res.render('user/viewchat.ejs',{userProfile:req.user,dataResponse})
        } catch (error) {
            console.log(error)
        }
    },

    //GET user post house details
    getPostAllDetails : async(req,res) => {
        try {
            let postId = req.query.id
            const user = req.user
            const post =await Post.findById({_id : postId}).lean()
            const imageUrl = post.image_url
            res.render('user/postdetails.ejs',{post: post,imageUrl,user})
        } catch (error){
            console.log(error)
        }
    },

    getLandAllPostDetails : async(req,res) => {
        try {
            let postId = req.query.id
            const user = req.user
            const post =await Post.findById({_id : postId}).lean()
            const imageUrl = post.image_url
            res.render('user/landPostdetails.ejs',{post: post,imageUrl,user})
        } catch (error){
            console.log(error)
        }
    },
    currentConversation : async(req,res) =>{
        try {
          const  currentChatId = req.params.id
            const getCurrentChat =await axios.get('http://localhost:3000/message/'+ currentChatId);
            const dataResponse = getCurrentChat.data.getdMessages
         res.render('user/message.ejs',{userProfile : req.user,dataResponse,format})   
        }catch(error){
            console.log(error)
        }
    },

    getConversations : async(req,res) =>{
        try {
            let  postId = req.query.postId
            const currentUserId = req.user.id
            const userId = req.query.userId
            let conversationId = ''
            let dataResponse = []
            const  getConversation= await axios.get('http://localhost:3000/Conversation/'+ userId + '/' + currentUserId + '/'+ postId)
            if(getConversation.data === null){
                // create a conversation between the post owner and the sender by calling create conversation API 
                const  createConversation= await axios.post('http://localhost:3000/Conversation',
                {"senderId":currentUserId,"receiverId": userId, "postId": postId})
                conversationId = createConversation.data._id
            }else{
                 conversationId = getConversation.data._id
                  postId = getConversation.data.postId
                const Messages =await axios.get('http://localhost:3000/message/'+ conversationId + '/' + postId);
                 dataResponse = Messages.data ? Messages.data : dataResponse
            }  
            const  getuserPost= await axios.get('http://localhost:3000/getPost/'+ postId)
            const userPost = getuserPost.data
               res.render('user/message.ejs',{userProfile : req.user,dataResponse,format,conversationId,userPost}) 
        }catch(error){
            console.log(error)
        }
    },

}


