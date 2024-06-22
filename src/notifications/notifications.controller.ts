import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './interfaces/notifications.interfaces';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {

    constructor(private adminService: NotificationsService ) {}

    @Get('/')
    getAll(){
        return this.adminService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Notification> {
        return await this.adminService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Notification): Promise<Notification> {
        return await this.adminService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Notification> {
      return await this.adminService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Notification> {
        return await this.adminService.delete(id);
    }


}
