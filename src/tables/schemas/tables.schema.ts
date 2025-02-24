import { Schema } from 'mongoose'

export const TablesSchema = new Schema({
    id: {type: String },
    number: {type: String, required: true},
    status: {type: String, required: true},
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});