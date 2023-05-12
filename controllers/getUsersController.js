const express = require('express')
const app = express()
const axios = require('axios')
const User = require("../models/User");



exports.getUsers = async(req,res) => {

    try {
        const getUsers = await  User.find({})
        res.status(200).json({getUsers})
        
    } catch (error) {
        res.status(500).json(error)   
    }
}


exports.getUser = async(req,res) => {
    const userId = req.query.friendId
    console.log(userId)
    try {
        const getUser = await  User.findById({_id: userId})
        res.status(200).json({getUser})
        
    } catch (error) {
        res.status(500).json(error)   
    }
}