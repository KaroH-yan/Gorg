const mongoose = require("mongoose")
const express = require("express");
const Model = require("./modelsArticles");
const xlsx = require('xlsx'); 
const multer = require("multer");
const router = express.Router();

global._basedir = __dirname;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(_basedir, "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

router.post('/addListOfArticles', upload.single("uploadfile"), (req, res) => {
    try {
      const filePath = req.file;
      importExcelData2MongoDB(filePath);
      res.json({
        msg: "File Uploaded",
        file: req.file?.filename,
      });
    } catch (err) {
      console.log("Error uploading file:", err);
      res.status(500).json({ error: "Failed to upload file" });
    }
  });

  async function importExcelData2MongoDB(filePath) {
    console.log(filePath, "filePath")
  }

module.exports = router;