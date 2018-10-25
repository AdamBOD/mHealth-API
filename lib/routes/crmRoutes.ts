import { Request, Response } from 'express';
import { UserDataController } from '../controllers/crmControllers';

export class Routes {
    public userDataController: UserDataController = new UserDataController ();

    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send('Heart Rate Monitor API');
        });
        
        app.route('/data').get ((req: Request, res: Response) => {
            if (req.params.userID == null) {
                res.status(200).send ('Empty Request');
                console.log (req.params)
            } else {
                res.status(200).send ('User Data');
            }
        });

        app.route('/data').post (this.userDataController.addNewUserData);

        app.route('/login').post ((req: Request, res: Response) => {
            if (req.params.userID == null) {
                res.status(200).send ('Empty Request');
                console.log (req.params)
            } else {
                res.status(200).send ('User Data');
            }
        });
    }
}