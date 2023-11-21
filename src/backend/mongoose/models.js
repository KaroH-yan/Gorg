const { text } = require("express");
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const data = mongoose.model("user", Schema);

module.exports = data;