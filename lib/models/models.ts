import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserDataSchema = new Schema({
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