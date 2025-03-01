import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Admin } from './interfaces/categories.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService ) {}

    @Get('/')
    getAll(){
        return this.categoriesService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Admin> {
        return await this.categoriesService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Admin): Promise<Admin> {
        return await this.categoriesService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Admin> {
      return await this.categoriesService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Admin> {
        return await this.categoriesService.delete(id);
    }


}
