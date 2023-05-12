const express = require('express')
const router = express.Router()
const controllers = require('../controllers/conversationMessageController');
const { ensureAuth } = require('../middleware/auth');




//add conversatio
router.post('/',controllers.conversation)

//get conversation
router.get('/:userId',controllers.getConversation)
router.put('/ongoingConversation/:conversationId',controllers.checkConvesation)

router.get('/:userId/:currentUserId/:postId',controllers.getUsersConversation)
router.get('/getConversation/:userId',controllers.getConversationByUserId)

//update user read message
router.put('/user/:messageId',controllers.updateMessageRead)

module.exports = router;

