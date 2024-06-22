import { Module } from '@nestjs/common';
import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publications.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicationsSchema } from './schemas/publications.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Publication',
            schema: PublicationsSchema
        }])
        ],
  controllers: [PublicationsController],
  providers: [PublicationsService]
})
export class PublicationsModule {}
