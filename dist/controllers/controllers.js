"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const models_1 = require("../models/models");
const UserData = mongoose.model('UserData', models_1.UserDataSchema);
class UserDataController {
    getUserDataByID(req, res) {
        if (req.query.userID != null) {
            UserData.findById(req.query.userID, (err, userData) => {
                if (err) {
                    console.log('Eror getting user data');
                    res.send(err);
                }
                res.json(userData);
            });
        }
        else {
            // res.send ('Empty Request');
            console.log('Empty Request');
            UserData.find({}, (err, userData) => {
                if (err) {
                    console.log('Eror getting user data');
                    res.send(err);
                }
                res.json(userData);
            });
        }
    }
    // Needs to be x-www-form-urlencoded
    addNewUserData(req, res) {
        let newUserData = new UserData(req.body);
        newUserData.save((err, userData) => {
            if (err) {
                res.send(err);
            }
            res.json(userData);
        });
    }
}
exports.UserDataController = UserDataController;
//# sourceMappingURL=controllers.js.map