import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './interfaces/orders.interfaces';
import { Product } from 'src/products/interfaces/products.interfaces';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Orders') private readonly orderModel: Model<Order>,
        @InjectModel('Products') private readonly productModel: Model<Product>,
    ){}

    async getAll(){
        return this.orderModel.find();
    }

    async getById(id: string): Promise<Order> {
        const result = await this.orderModel.findById(id).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async create(order: Order) {
        let totalAmount: number = 0;
    
        for (const product of order.products) {
          const findProduct = await this.productModel.findById(product.product_id).exec();
    
          if (!findProduct) {
            throw new NotFoundException('Product not found');
          }
    
          if (Number(findProduct.stock) < product.quantity) {
            throw new BadRequestException(
              `Not enough stock for product ${findProduct.name}. Available stock: ${findProduct.stock}`,
            );
          }
    
          const updatedProduct = await this.productModel.findByIdAndUpdate(
            findProduct._id,
            { $inc: { stock: -product.quantity } },
            { new: true },
          ).exec();
    
          if (!updatedProduct) {
            throw new NotFoundException('Product stock could not be updated');
          }
    
          totalAmount += Number(findProduct.price) * product.quantity;
        }
    
        order.totalAmount = totalAmount;
    
        const result = new this.orderModel(order);
        return await result.save();
    }

    async update(id: string, updateBody: any): Promise<Order> {
        const result = await this.orderModel.findByIdAndUpdate(id, updateBody, { new: true }).exec();
        if (!result) {
          throw new NotFoundException('User not found');
        }
        return result;
    }

    async delete(id: string): Promise<Order> {
        const result = await this.orderModel.findByIdAndDelete(id).exec();
        if (!result) {
        throw new NotFoundException('User not found');
        }
        return result;
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
