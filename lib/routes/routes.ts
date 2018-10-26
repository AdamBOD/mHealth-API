import { Request, Response } from 'express';
import { UserDataController } from '../controllers/controllers';

export class Routes {
    public userDataController: UserDataController = new UserDataController ();

    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send('Heart Rate Monitor API');
        });
        
        app.route('/data').get (this.userDataController.getUserDataByID)
                          .post (this.userDataController.addNewUserData);

        app.route('/login').post ((req: Request, res: Response) => {
            if (req.query.userID == null) {
                res.status(200).send ('Empty Request');
                console.log (req.params)
            } else {
                res.status(200).send ('User Data');
            }
        });
    }
}