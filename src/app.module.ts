import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// modules
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministratorsModule } from './administrators/administrators.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PublicationsModule } from './publications/publications.module';
import { ReviewsModule } from './reviews/reviews.module';
import { savedPublicationsModule } from './savedPublications/savedPublications.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, 
    AdministratorsModule, 
    CategoriesModule, 
    PublicationsModule, 
    NotificationsModule, 
    ReviewsModule, 
    savedPublicationsModule, 
    AuthModule,
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017/${process.env.DATABASE_NAME}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
