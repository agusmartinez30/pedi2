import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesSchema } from './schemas/categories.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Category',
            schema: CategoriesSchema
        }])
        ],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
