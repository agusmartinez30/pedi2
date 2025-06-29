import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { Admin } from './interfaces/administrators.interfaces';

@Controller('administrators')
export class AdministratorsController {

    constructor(private adminService: AdministratorsService ) {}

    @Get('/')
    getAll(){
        return this.adminService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Admin> {
        return await this.adminService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Admin): Promise<Admin> {
        return await this.adminService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Admin> {
      return await this.adminService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Admin> {
        return await this.adminService.delete(id);
    }


}
