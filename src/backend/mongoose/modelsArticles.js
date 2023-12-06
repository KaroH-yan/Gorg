const mongoose = require("mongoose");


const companySchema = new mongoose.Schema({
  artName: {
    type: String,
    required: false,
  },
  PartnerName: {
    type: String,
    required: false,
  },
  Lieferant: {
    type: String,
    required: true,
  },
  WarenGgoup: {
    type: Number,
    required: true,
  },
  artNumber: {
    type: Number,
    required: false,
  },
  breite: {
    type: Number,
    required: false,
  },
  länge: {
    type: Number,
    required: false,
  },
  qm: {
    type: Number,
    required: false,
  },
  farbe: {
    type: String,
    required: false,
  },
  Bestand: {
    type: Number,
    required: false,
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

const company=mongoose.model("articles", companySchema);

module.exports=company;
