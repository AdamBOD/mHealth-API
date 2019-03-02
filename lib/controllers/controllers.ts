import * as mongoose from 'mongoose';
import { UserDataSchema, LogSchema } from '../models/models';
import { Request, Response } from 'express';

const UserData = mongoose.model('UserData', UserDataSchema);
const LogData = mongoose.model('Log', LogSchema);

export class UserDataController {
    public getUserDataByID (req: Request, res: Response) {
        if (req.query.userID != null) {
            UserData.findById (req.query.userID, (err, userData) => {
                if(err){
                    console.log ('Eror getting user data');
                    res.send(err);
                }
                res.json(userData);
            });
        } else {
            // res.send ('Empty Request');
            console.log ('Empty Request');
            UserData.find ({}, (err, userData) => {
                if(err){
                    console.log ('Eror getting user data');
                    res.send(err);
                }
                res.json(userData);
            });
        }
    }

    // Needs to be x-www-form-urlencoded
    public addNewUserData (req: Request, res: Response) { 
        let newUserData = new UserData (req.body);
    
        newUserData.save ((err, userData) => {
            if(err){
                res.send(err);
            }    
            res.json(userData);
        });
    }
}

export class LogDataController {
    public getLog (req: Request, res: Response) {
        LogData.find ({}, (err, logData) => {
            if(err){
                console.log ('Eror getting user data');
                res.send(err);
            }
            res.json(logData);
        });
    }

    public addLog (req: Request, res: Response) {
        let newLog = new LogSchema (req.body);

        newLog.save ((err, logData) => {
            if(err){
                res.send(err);
            }    
            res.json(logData);
        });
    }
}