import { Schema } from 'mongoose'

export const NotificationsSchema = new Schema({
    id: {type: String },
    enabled: {type: Boolean, default: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String },
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    publication: { type: Schema.Types.ObjectId, ref: 'Publications', required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});