import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/products.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService ) {}

    @Get('/')
    getAll(){
        return this.productsService.getAll()
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<Product> {
        return await this.productsService.getById(id);
    }

    @Post()
    async create(@Body() product: Product): Promise<Product> {
        return await this.productsService.create(product);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: any): Promise<Product> {
      return await this.productsService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Product> {
        return await this.productsService.delete(id);
    }


}
