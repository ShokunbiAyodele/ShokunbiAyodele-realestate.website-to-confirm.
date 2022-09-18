const express = require('express');
const controllers = require('../controllers/aboutontroller');
const router = express.Router()


router.get('/',controllers.aboutPage)

module.exports = router;