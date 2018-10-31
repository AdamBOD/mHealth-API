"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers/controllers");
class Routes {
    constructor() {
        this.userDataController = new controllers_1.UserDataController();
    }
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send('Heart Rate Monitor API');
        });
        app.route('/data').get(this.userDataController.getUserDataByID)
            .post(this.userDataController.addNewUserData);
        app.route('/login').post((req, res) => {
            if (req.query.userID == null) {
                res.status(200).send('Empty Request');
                console.log(req.params);
            }
            else {
                res.status(200).send('User Data');
            }
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map