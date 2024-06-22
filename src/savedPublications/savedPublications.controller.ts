import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { savedPublicationsService } from './savedPublications.service';
import { savedPublication } from './interfaces/savedPublications.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('savedPublications')
export class savedPublicationsController {

    constructor(private adminService: savedPublicationsService ) {}

    @Get('/')
    getAll(){
        return this.adminService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<savedPublication> {
        return await this.adminService.getById(id);
    }

    @Post()
    async createUser(@Body() user: savedPublication): Promise<savedPublication> {
        return await this.adminService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<savedPublication> {
      return await this.adminService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<savedPublication> {
        return await this.adminService.delete(id);
    }


}
