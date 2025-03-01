import { Schema } from 'mongoose'

export const TablesSchema = new Schema({
    id: {type: String },
    number: {type: String, required: true},
    status: { type: String, enum: ['availible', 'busy', 'reserved '], default: 'availible' },
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});