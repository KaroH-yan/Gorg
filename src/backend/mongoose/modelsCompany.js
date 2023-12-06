const mongoose = require("mongoose");


const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  Country: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
  },
  updateDate: {
    type: Date,
    required: true,
  }
});

const company=mongoose.model("users", companySchema);

module.exports=company;
