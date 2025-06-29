import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { Travel, TravelDocument } from './schemas/travels.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('travels')
export class TravelsController {

    constructor(private travelsService: TravelsService ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
      return this.travelsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getTravel(@Param('id') id: string): Promise<Travel> {
        return await this.travelsService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createTravel(@Body() travel: any): Promise<any> {
        return await this.travelsService.create(travel);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateTravel(@Param('id') id: string, @Body() updateTravelDto: any): Promise<Travel> {
      return await this.travelsService.update(id, updateTravelDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteTravel(@Param('id') id: string): Promise<Travel> {
        return await this.travelsService.delete(id);
    }
}
