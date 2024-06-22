import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsSchema } from './schemas/notifications.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Notification',
            schema: NotificationsSchema
        }])
        ],
  controllers: [NotificationsController],
  providers: [NotificationsService]
})
export class NotificationsModule {}
