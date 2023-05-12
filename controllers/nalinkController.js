const express = require("express");
const app = express();
const axios = require("axios");
const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  aboutPage: (req, res) => {
    res.render("pagelink/about.ejs", { user: req.user });
  },
  viewagents: async (req, res) => {
    const allAgents = await User.find({ usertype: "agenttUser" }).lean();
    res.render("pagelink/agents.ejs", { allAgents, user: req.user });
  },

  viewproperties: async (req, res) => {
    const allpost = await Post.find({}).sort({ _id: -1 }).lean();
    const user = req.user;
    const allAgents = await User.find({ usertype: "agenttUser" }).lean();
    res.render("pagelink/properties.ejs", { allpost, allAgents, user });
  },

  propertiessearch: async (req, res) => {
    const clause_array = [];
    if (req.body.propertyType !== "") {
      const propertyType = {
        propertyType: req.body.propertyType,
      };
      clause_array.push(propertyType);
    }
    if (req.body.propStatus !== "") {
      const purpose = {
        purpose: req.body.propStatus,
      };
      clause_array.push(purpose);
    }
    if (req.body.agentId !== "") {
      const user = {
        user: req.body.agentId,
      };
      clause_array.push(user);
    }
    if (req.body.noOfBed !== "") {
      const noOfBed = {
        numberOfBedrooms: req.body.noOfBed,
      };
      clause_array.push(noOfBed);
    }
    if (req.body.noOfBathRoom !== "") {
      const noOfBathRoom = {
        numberOfBathrooms: req.body.noOfBathRoom,
      };
      clause_array.push(noOfBathRoom);
    }
    if (req.body.minPrice !== "") {
      const minPrice = {
        price: { $gt: req.body.minPrice },
      };
      clause_array.push(minPrice);
    }
    if (req.body.maxPrice !== "") {
      const maxPrice = {
        price: { $lt: req.body.maxPrice },
      };
      clause_array.push(maxPrice);
    }
    console.log(clause_array);
    //  const where_string = clause_array ? {$in: {}}
    const allAgents = await User.find({ usertype: "agenttUser" }).lean();
    const allpost = await Post.find({ $or: clause_array });
    res.render("pagelink/properties.ejs", {
      allpost,
      allAgents,
      user: req.user,
    });
  },

  viewcontact: (req, res) => {
    res.render("pagelink/contact.ejs", { user: req.user });
  },
};
