const express = require("express");
require("dotenv").config();
const biodata = require("./biodataRouter");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/biodata", biodata);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}/`);
});
