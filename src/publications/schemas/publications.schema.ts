import { Schema } from 'mongoose'

export const PublicationsSchema = new Schema({
    id: {type: String },
    enabled: {type: Boolean, default: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    finalPrice: {type: Number, required: true},
    discount: {type: Number, required: true},
    pictures: [{type: String, required: true}],
    description: {type: String, required: true},
    status: {type: String, required: true},
    condition: {type: String, required: true},
    clicks: {type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});