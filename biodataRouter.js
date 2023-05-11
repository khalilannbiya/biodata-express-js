const express = require("express");

const biodata = express.Router();

biodata.get("/", (req, res) => {
  const { nama, alamat } = req.query;

  res.send({
    nama,
    "tempat-lahir": req.query["tempat-lahir"],
    "tanggal-lahir": req.query["tanggal-lahir"],
    alamat,
  });
});

module.exports = biodata;
