const uploadToCloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const { uuid } = require("../helper/helper");

// const crypto = require("crypto");



module.exports = {
  addProperty: async (req, res) => {
try {

    let imageUrlList = []
    let imagePublicIdList = []
    for(var i=0;i<req.files.length;i++){
      var locaFilePath = req.files[i].path
      var result = await uploadToCloudinary(locaFilePath,'post_urls')
      console.log(result.public_id)
      imageUrlList.push(result.secure_url)
      imagePublicIdList.push(result.public_id)
    }

    let size = ''
    const PostId = uuid()
    let selectAreaName = ''
    let PropertyPrice = 0
    let initialAmount = ''
    let monthlyPayment = ''
    let periodOfPayment = ''
    if(req.body.size === null){
         size = "N/A"
    }else{
        size = req.body.size + " Sqm"
    }

    if(req.body.areaName === null){
        selectAreaName = 'N/A'
    }
    else{
        selectAreaName =req.body.areaName
    }

     //format Price entry 
    if(req.body.denomination === 'NAIRA'){
      PropertyPrice = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGR'}).format(req.body.PropertyPrice)
    }else{
        PropertyPrice = new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD',}).format(req.body.PropertyPrice);
    }

    if(req.body.installment){
        initialAmount = req.body.Initial_amount;
        monthlyPayment = req.body.monthly_payment
        periodOfPayment = req.body.period_of_payment
    }
    
    await Post.create({
        title: req.body.title,
        PostId: PostId,
        image_url: imageUrlList,
        image_publicIds:imagePublicIdList,
        purpose: req.body.purpose,
        propertyType: req.body.propertyType,
        subType: req.body.subType,
        numberOfBedrooms: req.body.numberOfBedrooms,
        numberOfBathrooms: req.body.numberOfBathrooms,
        numberOfToilets: req.body.numberOfToilets,
        landSize : size,
        serviced : req.body.serviced,
        furnished : req.body.furnished,
        newlyBuilt : req.body.newlyBuilt,
        stateName : req.body.stateName,
        LocalityName : req.body.LocalityName,
        selectAreaName : selectAreaName,
        areaType : req.body.areaType,
        price: PropertyPrice + "/"+ req.body.appendTo,
        installment : req.body.installment,
        initialAmount : initialAmount,
        monthlyPayment : monthlyPayment,
        periodOfPayment : periodOfPayment,
        youtube_video_link :req.body.youtube_video_link,
        instagram_video_link:req.body.instagram_video_link,
        likes: 0,
        description: req.body.description,
        user: req.user.id,
      });
      console.log("Post has been added!");
      req.flash('success', {msg :"Adds has been created successfully"})
      res.redirect("/userDashboard/"+ req.user.id);
       }catch (error) {
    console.log(error)

       }
    },
}