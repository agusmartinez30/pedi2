import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/orders.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {

    constructor(private ordersServide: OrdersService ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
      return this.ordersServide.findAll(query);
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Order> {
        return await this.ordersServide.findOne(id);
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

    @Get('nearby')
    async getOrdersNearby(@Query('_filters') filtersRaw: string): Promise<Order[]> {
        const filters = JSON.parse(filtersRaw);
        return await this.ordersServide.getOrdersNearby(filters);
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
