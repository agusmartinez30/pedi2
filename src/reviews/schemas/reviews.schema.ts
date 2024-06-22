import { Schema } from 'mongoose'

export const ReviewsSchema = new Schema({
    id: {type: String },
    enabled: {type: Boolean, default: true},
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    rating: {type: Number, default: 1},
    createdAt: {
        type: Date,
        default: Date.now
    }
});