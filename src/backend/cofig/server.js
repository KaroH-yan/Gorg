const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const express = require("express");
const Router = require("./routes")


const app = express();
app.use(express.json());

const username = "<mongodb username>";
const password = "<password>";
const cluster = "<cluster name>";
const dbname = "myFirstDatabase";
const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://karo94:<E66kabKN2vRjMFjT>@cluster0.4lbl1xt.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


//const uri = "mongodb://0.0.0.0:27017/";
//const client = new MongoClient(uri);




