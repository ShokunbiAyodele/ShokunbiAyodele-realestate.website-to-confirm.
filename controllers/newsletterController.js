const express = require('express')
const app = express()
const axios = require('axios')
const subEmail = require("../models/EmailSubscription");


exports.subscribetonewsletter = async(req,res) => {
    try {
        //save new email news letter subscription
        const checkMail = await subEmail.findOne({email: req.body.email}).lean()
        let msgres = ''
        if(!checkMail){
           const newsub = new subEmail({
                email : req.body.email,
                subscribe : true
            })
            await newsub.save()
                msgres = 'your are subscribed to our new letter'
        }else{
                msgres = 'You are aleady subscribed to our new letter'
        }
        console.log(msgres)
        res.status(200).json({msg:msgres})

    } catch (error) {
        console.log(error)
 }
}