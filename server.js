const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const routes = require("./routes");
const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
 });

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});