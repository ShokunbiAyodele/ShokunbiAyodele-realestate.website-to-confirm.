const User = require('../models/User')


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