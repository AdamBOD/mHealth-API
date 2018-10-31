"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.mongoUrl = 'mongodb://admin:admin01!@ds147213.mlab.com:47213/userdata';
        this.mongoClient = new mongodb_1.MongoClient();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map