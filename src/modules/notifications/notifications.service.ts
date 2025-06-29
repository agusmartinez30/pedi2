import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './interfaces/notifications.interfaces';
import { Notifications, NotificationsDocument } from './schemas/notifications.schema';
import { BaseService } from '../../core/base.service';

@Injectable()
export class NotificationsService extends BaseService<NotificationsDocument> {

    constructor(@InjectModel(Notifications.name) private readonly notificationsModel: Model<NotificationsDocument>) {
        super(notificationsModel);
      }
    
}
