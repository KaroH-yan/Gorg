require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const Router = require("./mongoose/routes")

const app = express();
app.use(cors({origin: "*"}))
app.use(express.json());

const username = process.env.mongoDBLogin;
const password = process.env.mongoDBPassword
const cluster = process.env.mongoDBCluster;
const dbname = "sample_airbnb";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/$?retryWrites=true&w=majority`, {
    dbName:dbname
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);
const ServerPort = process.env.BackendPort;
app.listen(ServerPort, () => {
  console.log(`Server is running at port ${ServerPort}`);
});