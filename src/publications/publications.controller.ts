import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { Publication } from './interfaces/publications.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('Publications')
export class PublicationsController {

    constructor(private adminService: PublicationsService ) {}

    @Get('/')
    getAll(){
        return this.adminService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Publication> {
        return await this.adminService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Publication): Promise<Publication> {
        return await this.adminService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Publication> {
      return await this.adminService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Publication> {
        return await this.adminService.delete(id);
    }


}
