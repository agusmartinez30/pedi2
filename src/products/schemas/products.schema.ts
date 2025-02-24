import { Schema } from 'mongoose'

export const ProductsSchema = new Schema({
    id: {type: String },
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: { type: Schema.Types.ObjectId, ref: 'Categories', required: true },
    stock: {type: Number, required: true},
    pictures: [{type: String, required: true}],
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});