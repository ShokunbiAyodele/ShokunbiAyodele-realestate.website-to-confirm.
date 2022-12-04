const express = require('express');
const controllers = require('../controllers/userProfile');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const upload  = require("../middleware/multer");
const router = express.Router()



router.get('/userDashboard/:id',ensureAuth,controllers.userPofile)
router.get('/addpost/:id',ensureAuth,controllers.addpost)
router.get('/currentProfile/:id',ensureAuth,controllers.getUserProfile)
router.put('/update/profilePicture/:id',ensureAuth,upload.single("userLogo"),controllers.updateProfilePicture)
router.get('/setting/:id',ensureAuth,controllers.getUserDetails)
router.put('/update/domainName',ensureAuth,controllers.updatePersonalURL)
router.put('/governmentDoc',ensureAuth,upload.single('govtId'),controllers.uploadGovernmentIssueId)
router.put('/uploadselfie',ensureAuth,upload.single('selfiePic'),controllers.uploadSelfie)
router.put('/uploadBusinesscac',ensureAuth,upload.single('businessCAC'),controllers.uploadBusinesscac)
router.put('/updateedted',ensureAuth,upload.single('userPicture'),controllers.updateeditedsetting)


module.exports = router;