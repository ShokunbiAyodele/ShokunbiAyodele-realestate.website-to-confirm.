const User = require('../models/User')
const { uuid, validateMobileNumber } = require("../helper/helper");
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

exports.uploadGovernmentIssueId  = async(req,res)=>{
    try {
        let locaFilePath = req.file.path 
        var result = await uploadToCloudinary(locaFilePath,'officialDocuments')
        await User.findByIdAndUpdate({_id : req.user.id},{governmenTDOC : result.secure_url},{
            new: true,
            upsert: true
        })
        return res.json("updated successful")
    } catch (error) {
        console.log(error)
    }
}                                                                                                                       

exports.uploadSelfie  = async(req,res)=>{
    try {
        let locaFilePath = req.file.path 
        var result = await uploadToCloudinary(locaFilePath,'officialDocuments')
        await User.findByIdAndUpdate({_id : req.user.id},{selfiePicture : result.secure_url},{
            new: true,
            upsert: true
        })
        return res.json("updated successful")
    } catch (error) {
        console.log(error)
    }
}

exports.uploadBusinesscac  = async(req,res)=>{
    try {
        let locaFilePath = req.file.path 
        var result = await uploadToCloudinary(locaFilePath,'officialDocuments')
        await User.findByIdAndUpdate({_id : req.user.id},{businessCACDoc : result.secure_url},{
            new: true,
            upsert: true
        })
        return res.json("updated successful")
    } catch (error) {
        console.log(error)
    }
}

exports.updateeditedsetting  = async(req,res)=>{
    try {
        const validationErrors = []
        let filePath = ''
        let phoneNumber = req.body.phone
        let countryCode = req.body.countryCode
        const api_key =process.env.number_validate_apikey

        let locaFilePath = req.file.path 
        if(locaFilePath !== null){
            filePath = locaFilePath
            let oldFilepath = req.user.profilePic
            //call cloduinary destroy session to delete old filepath and insert another one  before you update the mongodb with the sec_url
            var result = await uploadToCloudinary(filePath,'')
        }
        else{
            filePath = req.user.profilePic
        }

      


        validateMobileNumber(countryCode,phoneNumber,api_key).then(result =>{
            if(result.isValid !== true){validationErrors.push({ msg: 'You have entered an in correct phone number'})}

            if (validationErrors.length) {
                req.flash('errors', validationErrors)
                return res.redirect('../')
              }
            
            let msisdn = result.nationalFormat
            let callingCode = result.callingCode
            let savephoneNumber = msisdn.replace(/\s+/g, '')


           


        })
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }
}