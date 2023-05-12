const express = require('express');
const controllers = require('../controllers/newsletterController');
const router = express.Router()


router.post('/subtonewsletter',controllers.subscribetonewsletter)

module.exports = router;