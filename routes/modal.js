const express = require('express');
const controllers = require('../controllers/loginController');
const router = express.Router()

router.get('/',controllers.modal)


module.exports = router;