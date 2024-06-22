import { Module } from '@nestjs/common';
import { savedPublicationsController } from './savedPublications.controller';
import { savedPublicationsService } from './savedPublications.service';
import { MongooseModule } from '@nestjs/mongoose';
import { savedPublicationsSchema } from './schemas/savedPublications.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'savedPublication',
            schema: savedPublicationsSchema
        }])
        ],
  controllers: [savedPublicationsController],
  providers: [savedPublicationsService]
})
export class savedPublicationsModule {}
