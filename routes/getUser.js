const express = require('express');
const controllers = require('../controllers/getUsersController');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const upload  = require("../middleware/multer");
const router = express.Router()



router.get('/',controllers.getUsers)
router.get('/user',controllers.getUser)


module.exports = router;