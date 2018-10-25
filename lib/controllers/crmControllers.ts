import * as mongoose from 'mongoose';
import { UserDataSchema } from '../models/crmModels';
import { Request, Response } from 'express';

const UserData = mongoose.model('UserData', UserDataSchema);

export class UserDataController{
    public getUserData (req: Request, res: Response) {
        if (req.params.userID != null) {
            UserData.findById(req.params.userID, (err, userData) => {
                if(err){
                    res.send(err);
                }
                res.json(userData);
            });
        } else {
            res.send ('Empty Request');
        }
    }

    public addNewUserData (req: Request, res: Response) {                
        let newUserData = new UserData (req.body);
    
        newUserData.save((err, userData) => {
            if(err){
                res.send(err);
            }    
            res.json(userData);
        });
    }
}