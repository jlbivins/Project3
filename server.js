const express = require("express");
const parser = require("body-parser");
const path = require("path");

const mongoose = require("mongoose");

const http = require("http");

const app = express();
const PORT = process.env.PORT || 3001;

let db = require("./models");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.join(__dirname, 'build')));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

mongoose.connect("mongodb://localhost/mernProject", {useNewUrlParser: truew});

app.listen(PORT, function () {
    console.log(
        "Listening on port %s",
        PORT
    );
});

module.exports = app;