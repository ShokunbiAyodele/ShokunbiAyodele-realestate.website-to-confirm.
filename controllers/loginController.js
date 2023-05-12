const validator = require("validator");
const User = require("../models/User");
const passport = require("passport");
const Post = require("../models/Post");

exports.loginPage = (req, res) => {
  if (req.user) {
    return res.redirect("/dashboard");
  }
  res.render("login.ejs", { title: "Login" });
};
exports.homeIndex = async (req, res) => {
  const allpost = await Post.find({}).sort({ _id: -1 }).limit(20);
  const getPostForHouse = await Post.find({ propertyType: { $ne: "Land" } })
    .sort({ _id: -1 })
    .lean();
  const getPostForLand = await Post.find({ propertyType: "Land" })
    .sort({ _id: -1 })
    .lean();
  const user = req.user;
  res.render("index.ejs", {
    posts: getPostForHouse,
    landProp: getPostForLand,
    user,
    allpost,
  });
};

exports.getuserdashboard = async (req, res) => {
  if (!req.user) {
    res.redirect("/");
  }
  const allpost = await Post.find({}).sort({ _id: -1 }).limit(20);
  const getPostForHouse = await Post.find({ propertyType: { $ne: "Land" } })
    .sort({ _id: -1 })
    .lean();
  const getPostForLand = await Post.find({ propertyType: "Land" })
    .sort({ _id: -1 })
    .lean();
  res.render("dashboard.ejs", {
    user: req.user,
    posts: getPostForHouse,
    landProp: getPostForLand,
    allpost,
  });
};

exports.loginconfirmation = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/dashboard");
    });
  })(req, res, next);
};

exports.logoutUser = (req, res) => {
  req.logout((error) => {
    req.flash("success", { msg: "Success! you are logged out." });
    req.session.destroy((err) => {
      if (err)
        console.log(
          "Error : Failed to destroy the session during logout.",
          err
        );
      req.user = null;
      res.redirect("/");
    });
  });
};
