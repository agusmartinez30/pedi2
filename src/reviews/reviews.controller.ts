import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from './interfaces/reviews.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('reviews')
export class ReviewsController {

    constructor(private reviewsService: ReviewsService ) {}

    @Get('/')
    getAll(){
        return this.reviewsService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Review> {
        return await this.reviewsService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Review): Promise<Review> {
        return await this.reviewsService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Review> {
      return await this.reviewsService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Review> {
        return await this.reviewsService.delete(id);
    }


}
