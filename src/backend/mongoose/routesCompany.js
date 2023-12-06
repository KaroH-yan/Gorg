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

router.post('/addCompany', async (request, response)=> {
  const Company = new Model({...request.body, createDate: new Date(), updateDate: new Date()});
  
  try {
    await Company.save();
    response.send(Company);
  } catch (error) {
    response.status(500).send(error);
  }
  

})

router.delete('/deletePartner', async (request, response) => {
  console.log(request.body._id,"reques")
  const users = await Model.findByIdAndDelete({_id: request.body._id})
  try {
    response.send(JSON.stringify(users));
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/company", async (request, response) => {
    const users = await Model.find({}).limit(20);
    
    try {
      response.send(JSON.stringify(users));
    } catch (error) {
      response.status(500).send(error);
    }
  });


  module.exports = router;
  