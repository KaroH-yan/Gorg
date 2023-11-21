const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());



const username = "karo94";
const password = "E66kabKN2vRjMFjT";
const cluster = "<cluster0.4lbl1xt";
const dbname = "sample_airbnb";

mongoose.connect(
    // "mongodb+srv://karo94:E66kabKN2vRjMFjT@cluster0.4lbl1xt.mongodb.net/?retryWrites=true&w=majority",
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 

);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);
const ServerPort = 4000;
app.listen(ServerPort, () => {
  console.log(`Server is running at port ${ServerPort}`);
});