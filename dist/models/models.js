"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserDataSchema = new Schema({
    userID: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    heartbeat: {
        type: Number
    },
    stepsTaken: {
        type: Number
    },
    caloriesBurned: {
        type: Number
    }
});
//# sourceMappingURL=models.js.map