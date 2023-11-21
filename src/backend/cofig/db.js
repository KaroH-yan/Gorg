const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const uri = "mongodb://karo94:E66kabKN2vRjMFjT@cluster0.4lbl1xt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


const connectDB = async () => {
    try {
        console.log("connecting...")
        const conn = await mongoose.connect(uri);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};




//const client = new MongoClient(uri);
//exports.setUpConnection=()=> {
  //  console.log("connecting...")
    //mongoose.connect(client);
//}`

module.exports = connectDB;
