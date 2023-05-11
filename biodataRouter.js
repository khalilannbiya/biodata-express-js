const express = require("express");

const biodata = express.Router();

biodata.get("/", (req, res) => {
  const { nama, alamat } = req.query;

  res.json({
    nama,
    "tempat-lahir": req.query["tempat-lahir"],
    "tanggal-lahir": req.query["tanggal-lahir"],
    alamat,
  });
});

biodata.post("/", (req, res) => {
  const { nama, alamat } = req.body;

  res.json({
    nama,
    "tempat-lahir": req.body["tempat-lahir"],
    "tanggal-lahir": req.body["tanggal-lahir"],
    alamat,
  });
});

module.exports = biodata;
