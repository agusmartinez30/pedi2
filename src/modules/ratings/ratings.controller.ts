import { Controller, Get, Post, Body, Param, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RatingsService } from './ratings.service';
import { Rating, RatingDocument } from './schemas/ratings.schema';

@Controller('ratings')
export class RatingsController {

    constructor(private ratingsService: RatingsService ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
      return this.ratingsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getRating(@Param('id') id: string): Promise<Rating> {
        return await this.ratingsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createRating(@Body() rating: any): Promise<any> {
        return await this.ratingsService.create(rating);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateRating(@Param('id') id: string, @Body() updateRatingDto: any): Promise<Rating> {
      return await this.ratingsService.update(id, updateRatingDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteRating(@Param('id') id: string): Promise<Rating> {
        return await this.ratingsService.delete(id);
    }
}
