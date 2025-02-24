import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TablesService } from './tables.service';
import { Table } from './interfaces/tables.interfaces';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tables')
export class TablesController {

    constructor(private tablesService: TablesService ) {}

    @Get('/')
    getAll(){
        return this.tablesService.getAll()
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<Table> {
        return await this.tablesService.getById(id);
    }

    @Post()
    async createUser(@Body() user: Table): Promise<Table> {
        return await this.tablesService.create(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<Table> {
      return await this.tablesService.update(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<Table> {
        return await this.tablesService.delete(id);
    }


}
