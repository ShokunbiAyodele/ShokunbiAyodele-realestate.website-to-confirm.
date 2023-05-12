const express = require('express');
const controllers = require('../controllers/userpost');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router()


router.get('/viewPostedProperty/:id',ensureAuth,controllers.viewProperty)
router.delete('/deleteadd/:id',ensureAuth,controllers.deletePost)
router.put('/updatelikes/:postId',controllers.updatelike)
router.get('/getMobilenumber/:userId',controllers.getUserMobileNumber)

router.get('/viewuserChat/:id',ensureAuth,controllers.viewpeoplechat)

//get a single post details for housing property
router.get('/getPostDetails',controllers.getPostAllDetails)

//get a single post details for landed property
router.get('/getLandPostDetails',controllers.getLandAllPostDetails)

//route get SEND MESSAGE TO ADD OWNER   
// router.get('/currentChat/:id',ensureAuth,controllers.currentConversation)  
router.get('/currentChat',ensureAuth,controllers.getConversations)


module.exports = router;


