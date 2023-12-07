const mongoose = require("mongoose");
const express = require("express");
const Model = require("./modelsArticles");
const xlsx = require("xlsx");
const multer = require("multer");
const XLSX = require("xlsx");
const router = express.Router();

global._basedir = __dirname;

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
});

router.post("/addListOfArticles", upload.single("file"), async (req, res) => {
  try {
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const dataArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const keys = dataArray[0];

    const resultArray = dataArray.slice(1).map(function (row) {
      const obj = {};
      keys.forEach(function (key, index) {
        obj[key] = row[index];
      });
      return obj;
    });
    await importExcelData2MongoDB(resultArray);

    res.status(300).json({
      msg: "File Uploaded",
      fileName: req.file?.filename,
      data: resultArray,
    });
  } catch (err) {
    console.log("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

async function importExcelData2MongoDB(fileContent) {
  try {
    const workbook = XLSX.read(fileContent, { type: "buffer" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const dataArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const keys = dataArray[0];

    const resultArray = dataArray.slice(1).map(function (row) {
      const obj = {};
      keys.forEach(function (key, index) {
        obj[key] = row[index];
      });
      return obj;
    });

    return resultArray;
  } catch (error) {
    console.error(error);
  }
}

module.exports = router;
