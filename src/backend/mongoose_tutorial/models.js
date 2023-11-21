const { text } = require("express");
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: 0,
  },
});

const data = mongoose.model("listingsAndReviews", Schema);

module.exports = data;