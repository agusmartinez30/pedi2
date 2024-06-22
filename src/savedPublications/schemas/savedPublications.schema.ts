import { Schema } from 'mongoose'

export const savedPublicationsSchema = new Schema({
    id: {type: String },
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    publication: { type: Schema.Types.ObjectId, ref: 'Publications', required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});