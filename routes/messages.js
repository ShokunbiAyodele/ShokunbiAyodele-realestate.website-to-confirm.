const express = require('express')
const router = express.Router()
const controllers = require('../controllers/conversationMessageController');
const { ensureAuth } = require('../middleware/auth');



//add messages
router.post('/',controllers.message)

//get mesages
router.get('/:conversationId',controllers.getmessage)

router.get('/:conversationId/:postId',controllers.userConversation)
router.get('/lastMessage/:userId/',controllers.getLastInsertedMessage)
router.get('/getMessagewithconversation/:conversationId/:userId',controllers.getMessageWithConversation)
module.exports = router;