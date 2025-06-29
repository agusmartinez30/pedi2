import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/orders.schema';
import { BaseService } from '../../core/base.service';

@Injectable()
export class OrdersService extends BaseService<OrderDocument> {

    constructor(@InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>) {
       super(orderModel);
     }

    getOrdersNearby(filters: any) {
        try {
            const location = filters.location;
            const { latitude, longitude } = location;
            return this.orderModel.find({
                status: 'pending',  
                origin: {
                    $near: {
                        $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 1000, // 1000 meters
                },
            },
        })
        } catch (error) {
            console.log(error);
            throw new NotFoundException('Orders not found');
        }
    }

    async finish(id: string, orderData): Promise<Order> {
        const { paymentMethod, totalAmount, products } = orderData;

        // Validar el método de pago
        if (!['cash', 'bank_transfer'].includes(paymentMethod.method)) {
          throw new Error('Invalid payment method');
        }

        if(paymentMethod.method === 'cash' ) {
            // avisar a la caja que se ha pagado en efectivo
        } 

        const result = await this.orderModel.findByIdAndUpdate(id, { paymentMethod, totalAmount, products }, { new: true }).exec();
        return result;
    }

    async pay(id: string): Promise<Order> {
        const result = await this.orderModel.findByIdAndUpdate(id, { status: 'paid' }, { new: true }).exec();
        return result;
    }
}
