import { Schema } from 'mongoose'

export const OrdersSchema = new Schema({
    id: {type: String },
    status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' },
    paymentMethod: {
        type: {
            method: { type: String, enum: ['cash', 'bank_transfer']}, 
            details: { type: Schema.Types.Mixed },
        }
    },
    totalAmount: { type: Number, required: true},
    // user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    table: { type: Schema.Types.ObjectId, ref: 'Tables', required: true },
    // products: [{ type: Schema.Types.ObjectId, ref: 'Products', required: true }],
    products: [
        {
            product_id: { type: Schema.Types.ObjectId, ref: 'Products', required: true }, 
            name: { type: String }, 
            quantity: { type: Number, required: true, default: 1}, 
            note: { type: String  }
        }
    ],
    enabled: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});