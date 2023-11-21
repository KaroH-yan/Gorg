const { text } = require("express");
const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  student_id: {
    type: Number,
    required: true,
  }
});

const data = mongoose.model("grades", Schema);


module.exports = data;