import { Module } from '@nestjs/common';
import { SubcategoriesController } from './subcategories.controller';
import { SubcategoriesService } from './subcategories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategoriesSchema } from './schemas/subcategories.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Subcategory',
            schema: SubcategoriesSchema
        }])
        ],
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService]
})
export class SubcategoriesModule {}
