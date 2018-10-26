import * as mongoose from 'mongoose';
import { UserDataSchema } from '../models/models';
import { Request, Response } from 'express';

const UserData = mongoose.model('UserData', UserDataSchema);

export class UserDataController{
    public getUserDataByID (req: Request, res: Response) {
        if (req.query.userID != null) {
            console.log ('Getting user data');
            UserData.findById(req.query.userID, (err, userData) => {
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