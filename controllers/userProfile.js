const User = require('../models/User')
const Post = require('../models/Post')
const uploadToCloudinary = require("../middleware/cloudinary");
const { response } = require('express');



//this manage the user Profile dashboard system.
exports.userPofile = async(req,res)=>{
    try {
        const userProfile = await User.findById({_id : req.params.id}).lean()
                
        if(req.user){res.render('user/dashboard.ejs',{
            userProfle : userProfile
        })
        }else{
            return res.redirect('/login')
        }
        
    } catch (error) {
        console.log(error)
    }
}

exports.addpost = async(req,res)=>{    
    const user_id = req.params.id       
        if(req.user){res.render('user/addpost.ejs',{userProfle : req.user})
        }
}

exports.getUserProfile = async(req,res)=>{      
    const currentUser = await User.find({_id : req.params.id}).lean() 
    const postRecord = await Post.find({user :req.params.id})
   
    let checkPost = (postRecord[0])? postRecord[0] : ''
    if(!currentUser & !postRecord){return res.redirect('/login')}
    res.render('user/profile.ejs',{user : currentUser[0], post : checkPost})
    
}

exports.getUserDetails = async(req,res)=>{      
    const userDetails = await User.find({_id : req.params.id}).lean() 
    // const postRecord = await Post.find({user :req.params.id})
   
    if(!userDetails){return res.redirect('/login')}
    res.render('user/editProfile.ejs',{user : userDetails[0]})
    
}

exports.updateProfilePicture = async(req,res)=>{      
    // console.log(req.user)
    try {
        var locaFilePath = req.file.path
        var result = await uploadToCloudinary(locaFilePath,'userLogo')
        await User.findByIdAndUpdate({_id : req.params.id},{profilePic : result.secure_url},{
            new: true,
            upsert: true
        })
        res.redirect(`/currentProfile/${req.params.id}`)
    } catch (error) {
        console.log(error)
    }
    
}

exports.updatePersonalURL  = async(req,res)=>{
    try {
        let domainName = req.body.domainName+'.'+ 'nigeriarealtor.com'
        await User.findByIdAndUpdate({_id : req.user.id},{domainName : domainName,userWebsiteUrl:`https://${domainName}`},{
            new: true,
            upsert: true
        })
        return res.json("updated successful")
        
    } catch (error) {
        console.log(error)
    }
}



