const mongoose = require("mongoose")
const express = require("express");
const Model = require("./modelsCompany");


const db = mongoose.connection;
const router = express.Router();

router.post("/add_company", async (request, response) => {
    const user = new Model(request.body);

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.get("/company", async (request, response) => {
    const users = await Model.find({});
    
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  module.exports = router;
  