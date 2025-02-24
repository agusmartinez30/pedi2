import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/orders.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {

    constructor(private ordersServide: OrdersService ) {}

    @Get('/')
    getAll(){
        return this.ordersServide.getAll()
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Order> {
        return await this.ordersServide.getById(id);
    }

    @Post()
    async create(@Body() order: Order): Promise<Order> {
        return await this.ordersServide.create(order);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateOrderDto: any): Promise<Order> {
      return await this.ordersServide.update(id, updateOrderDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Order> {
        return await this.ordersServide.delete(id);
    }

    @Patch('finish/:id')
    async finish(@Param('id') id: string, @Body() order: Order): Promise<Order> {
        return await this.ordersServide.finish(id, order);
    }

    @Patch('pay/:id')
    async pay(@Param('id') id: string, @Body() order: Order): Promise<Order> {
        return await this.ordersServide.pay(id);
    }

}
