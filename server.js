const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const logController = require("./controllers/logs")
// const foodData = require("./utilities/foodData");


const dotenv = require("dotenv");
dotenv.config();

//DEPENDENCIES - REQUIRE MONGOOSE
const mongoose = require("mongoose");
// SCHEMA MODEL
const Log = require("./models/logs.js");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

const mongoURI = process.env.Mongo_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);

// server.js


app.use("/logs", logController);


// HOME

app.get("/", (req, res) => {
  res.send("This Home Page");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});