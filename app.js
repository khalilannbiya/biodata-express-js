const express = require("express");
const biodata = require("./biodataRouter");

const app = express();

app.use("/biodata", biodata);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
