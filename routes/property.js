const express = require('express');
const controllers = require('../controllers/propertyController');
const upload  = require("../middleware/multer");
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router()




router.post('/addroperty',upload.array('uploadImages',4),controllers.addProperty)



module.exports = router;
