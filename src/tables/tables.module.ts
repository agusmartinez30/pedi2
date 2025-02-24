import { Module } from '@nestjs/common';
import {  TablesController } from './tables.controller';
import { TablesService } from './tables.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TablesSchema } from './schemas/tables.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Tables',
            schema: TablesSchema 
        }])
        ],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}
