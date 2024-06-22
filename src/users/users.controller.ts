import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private adminService: UsersService ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/')
    getAll(){
        return this.adminService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.adminService.getById(id);
    }

    @Post()
    async createUser(@Body() user: User): Promise<User> {
        return await this.adminService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<User> {
      return await this.adminService.update(id, updateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.adminService.delete(id);
    }


}
