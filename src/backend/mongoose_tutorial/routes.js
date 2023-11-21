const mongoose = require("mongoose")
const express = require("express");
const userModel = require("./models");
const app = express();



//const myArray =  toArray(db.listCollections());
const db = mongoose.connection;
//const collections = await db.listCollections().toArray();
console.log("Model ", userModel);


app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
    console.log(users)
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.get("/getUsers", async(request, response) => {
    const users = await userModel.find();
    console.log(users)
    try {
        console.log("Finding data...")
        
        response.send(users);
      } catch (error) {
        response.status(500).send(error);
      }
  })

  module.exports = app;
  