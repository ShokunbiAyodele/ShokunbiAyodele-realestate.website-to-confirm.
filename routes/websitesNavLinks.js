const express = require("express");
const controllers = require("../controllers/nalinkController");
const router = express.Router();

router.get("/about", controllers.aboutPage);
router.get("/agents", controllers.viewagents);
router.get("/properties", controllers.viewproperties);
router.get("/contact", controllers.viewcontact);
router.post("/properties", controllers.propertiessearch);

module.exports = router;
