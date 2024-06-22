import { Schema } from 'mongoose'

export const CategoriesSchema = new Schema({
    id: {type: String },
    name: {type: String, required: true},
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});