import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notifications } from './schemas/notifications.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {

    constructor(private notificationsService: NotificationsService ) {}

    
    @Get('/')
    getAll(){
        return this.notificationsService.findAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Notifications> {
        return await this.notificationsService.findOne(id);
    }

    @Post()
    async createUser(@Body() user: Notifications): Promise<Notifications> {
        return await this.notificationsService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Notifications> {
      return await this.notificationsService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Notifications> {
        return await this.notificationsService.delete(id);
    }


}
