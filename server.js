const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require('cors');

const pieces = require("./routes/pieces");

const app = express();
const port = process.env.PORT || 8001;

mongoose
  .connect(
    `mongodb+srv://${config.get("db.username")}:${config.get("db.password")}@cluster0-4veva.gcp.mongodb.net/${config.get("db.database")}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connect to database"))
  .catch((error) => console.log(error));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", express.static(__dirname));
app.use("/pieces", pieces);

app.listen(port, () => console.log(`Entering port ${port}`));
