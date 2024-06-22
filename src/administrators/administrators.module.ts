import { Module } from '@nestjs/common';
import { AdministratorsController } from './administrators.controller';
import { AdministratorsService } from './administrators.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministratorsSchema } from './schemas/administrators.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Admin',
            schema: AdministratorsSchema
        }])
        ],
  controllers: [AdministratorsController],
  providers: [AdministratorsService]
})
export class AdministratorsModule {}
