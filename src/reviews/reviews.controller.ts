import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from './interfaces/reviews.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('reviews')
export class ReviewsController {

    constructor(private adminService: ReviewsService ) {}

    @Get('/')
    getAll(){
        return this.adminService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Review> {
        return await this.adminService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Review): Promise<Review> {
        return await this.adminService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Review> {
      return await this.adminService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Review> {
        return await this.adminService.delete(id);
    }


}
