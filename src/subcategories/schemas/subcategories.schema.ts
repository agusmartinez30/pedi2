import { Schema } from 'mongoose'

export const SubcategoriesSchema = new Schema({
    id: {type: String },
    name: {type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});