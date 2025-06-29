import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { User, UserDocument } from './schemas/users.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UserService ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Query() query: Record<string, any>) {
      return this.usersService.findAll(query);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.findOne(id);
    }

    @Post()
    async createUser(@Body() user: any): Promise<any> {
      console.log(user);
        return await this.usersService.createUser(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<User> {
      return await this.usersService.update(id, updateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return await this.usersService.delete(id);
    }


}
