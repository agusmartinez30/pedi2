import { Schema } from 'mongoose'

export const UsersSchema = new Schema({
    id: {type: String },
    username: {type: String, required: true, unique: true},
    fullName: {type: String },
    enabled: {type: Boolean, default: true},
    emailAddress: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});