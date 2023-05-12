const User = require('../models/User')
const validator = require('validator')
const {validateMobileNumber, DeleteImageCloudinary } = require("../helper/helper");
const Post = require('../models/Post')
const UserChats = require('../models/Chats')
const uploadToCloudinary = require("../middleware/cloudinary");
const bcrypt = require("bcrypt")
const axios = require('axios')



//this manage the user Profile dashboard system.
exports.userProfile = async(req,res)=>{
    try {
        const userProfile = await User.findById({_id : req.params.id}).lean()

        //axios to get user conversation
        const response =await axios.get('http://localhost:3000/conversation/getConversation/'+ req.user.id);
        // const conversationId = response.data._id

        let countUsermessage =0
        let number = []
        for(let res in response.data){
            const conversation = response.data[res]
            const getcountedMessage =await axios.get('http://localhost:3000/message/getMessagewithconversation/'+ conversation._id+ '/'+req.user.id);
            // console.log(getcountedMessage.data)
            if(getcountedMessage.data.length > 0){
            number.push(getcountedMessage.data)
            }else{
                number = []
            }
        }
        countUsermessage = number.length
        const countPost = await Post.countDocuments({user : req.params.id}) 
        if(req.user){res.render('user/dashboard.ejs',{
            userProfle : userProfile,countPost,countUsermessage
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
    res.render('user/profile.ejs',{userProfle : currentUser[0], post : checkPost})
    
}

exports.getUserDetails = async(req,res)=>{      
    const userDetails = await User.find({_id : req.params.id}).lean() 
    // const postRecord = await Post.find({user :req.params.id})
   
    if(!userDetails){return res.redirect('/login')}
    res.render('user/editProfile.ejs',{userProfle : userDetails[0]})
    
}

exports.updateProfilePicture = async(req,res)=>{      
    // console.log(req.user)
    try {
        let locaFilePath = req.file.path
        let result = await uploadToCloudinary(locaFilePath,'userLogo')
        let ProfilePicPublicId = result.public_id

        await User.findByIdAndUpdate({_id : req.params.id},{profilePic : result.secure_url,ProfilePicPublicId : ProfilePicPublicId},{
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

exports.updateEditedSetting  = async(req,res)=>{
    try {
        const validationErrors = []
        if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long'})
        if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })


        let whatsAppNumber = ''

        let newSecure_Url = ''
        let newPublicId = ''
        if(typeof req.file !== 'undefined'){
            let oldPublicId = req.user.ProfilePicPublicId
            console.log(req.file.path)
            //destroy present image in cloudinary
            DeleteImageCloudinary(oldPublicId)

            //save another image to cloudinary
       var result = await uploadToCloudinary(req.file.path ,'userLogo')
            newSecure_Url = result.secure_url
            newPublicId  = result.public_id
        }
        else{
            newPublicId = req.user.ProfilePicPublicId
            newSecure_Url = req.user.profilePic

        }
        if(req.body.WhatsappNum){
            const api_key =process.env.number_validate_apikey

            validateMobileNumber(req.body.countryCode,req.body.WhatsappNum,api_key).then(result =>{
                if(!result.isValid){validationErrors.push({ msg: 'You have entered an incorrect phone number'})}
    
                let msisdn = result.nationalFormat
                whatsAppNumber = msisdn.replace(/\s+/g, '')
    
            })
        }else{
            whatsAppNumber = req.user.WhatsAppNumber
        }
        
  
        if (validationErrors.length) {
            req.flash('errors', validationErrors)
            return res.redirect('/setting/'+ req.user.id)
          }

          //hash the password before storing to db
          req.body.password = await bcrypt.hash(req.body.password, 10);
          let data = {
            ProfilePicPublicId : newPublicId,
            profilePic         : newSecure_Url,
            officeStateName    : req.body.officeStateName,
            officeLocalGovname : req.body.officeLocalGovname,
            officeAddress      : req.body.officeAddress ,
            organizattionSericeProvided : req.body.organizattionSericeProvided,
            businessState      : req.body.businessState,
            businessAxis       : req.body.businessAxis,
            busiinessCategory  : req.body.busiinessCategory,
            faceBook           : req.body.faceBook,
            twitter            : req.body.twitter,
            linkedln           : req.body.linkedln,
            instagram          : req.body.instagram,
            WhatsAppNumber     : whatsAppNumber,
            password           :  (typeof req.body.password !=='undefined') ? req.body.password : req.user.password
        }                   
           await User.findByIdAndUpdate({_id : req.user.id},data,{new: true,upsert: true})
            req.flash('success', {msg : "Your profile has been updated"})
            res.redirect(`/setting/${req.user.id}`)
        
    } catch (error) {
        console.log(error)
    }
}