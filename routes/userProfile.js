const express = require('express');
const controllers = require('../controllers/userProfile');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const upload  = require("../middleware/multer");
const router = express.Router()



router.get('/userDashboard/:id',ensureAuth,controllers.userPofile)
router.get('/addpost/:id',ensureAuth,controllers.addpost)
router.get('/currentProfile/:id',ensureAuth,controllers.getUserProfile)
router.put('/update/profilePicture/:id',ensureAuth,upload.single("userLogo"),controllers.updateProfilePicture)
router.get('/editParofile/:id',ensureAuth,controllers.getUserDetails)
router.put('/update/domainName',ensureAuth,controllers.updatePersonalURL)



module.exports = router;