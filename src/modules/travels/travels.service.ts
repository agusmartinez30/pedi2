import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../../core/base.service';
import { Travel, TravelDocument } from './schemas/travels.schema';

@Injectable()
export class TravelsService extends BaseService<TravelDocument> {
  constructor(
    @InjectModel(Travel.name) private readonly travelModel: Model<TravelDocument>
  ) {
    super(travelModel);
  }
}
