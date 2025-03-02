import { Schema } from 'mongoose'

export const TablesSchema = new Schema({
    id: {type: String },
    number: {type: String, required: true},
    capacity: {type: Number, required: true, default: 1},
    status: { type: String, enum: ['availible', 'busy', 'reserved '], default: 'availible' },
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});