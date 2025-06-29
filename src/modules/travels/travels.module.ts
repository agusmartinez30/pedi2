import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelsController } from './travels.controller';
import { TravelsService } from './travels.service';
import { Travel, TravelsSchema } from './schemas/travels.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Travel.name, schema: TravelsSchema }])],
  providers: [TravelsService],
  controllers: [TravelsController],
})
export class TravelsModule {}
