import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { Subcategories } from './interfaces/subcategories.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('subcategories')
export class SubcategoriesController {

    constructor(private subcategoriesService: SubcategoriesService ) {}

    @Get('/')
    getAll(){
        return this.subcategoriesService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Subcategories> {
        return await this.subcategoriesService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Subcategories): Promise<Subcategories> {
        return await this.subcategoriesService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Subcategories> {
      return await this.subcategoriesService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Subcategories> {
        return await this.subcategoriesService.delete(id);
    }


}
