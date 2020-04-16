const express = require("express");
const mongoose = require("mongoose");

const pieces = require("./routes/pieces");

const app = express();
const port = process.env.PORT || 8001;

mongoose
  .connect("mongodb://localhost:27017/cnpm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to database"))
  .catch((error) => console.log(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname));
app.use("/pieces", pieces);
app.listen(port, () => console.log(`Entering port ${port}`));
