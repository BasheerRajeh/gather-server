const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require('config');

module.exports = function (app) {
    app.use(express.json());
    app.use(helmet());
    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    app.use(morgan("common"));
    app.use(bodyParser.json({ limit: "30mb" }));
    app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
    app.use(cors());
    app.use(express.static(config.get("assetsURI")));
};
