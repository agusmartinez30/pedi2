import { Schema } from 'mongoose'

export const AdministratorsSchema = new Schema({
    id: {type: String },
    username: {type: String, required: true},
    enabled: {type: Boolean, default: true},
    emailAddress: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});