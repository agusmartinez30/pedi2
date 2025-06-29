import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// modules
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministratorsModule } from './modules/administrators/administrators.module';
import { UsersModule } from './modules/users/users.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './modules/orders/orders.module';
import { TravelsModule } from './modules/travels/travels.module';
import { RatingsModule } from './modules/ratings/ratings.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule, 
    AdministratorsModule, 
    NotificationsModule, 
    AuthModule,
    OrdersModule,
    TravelsModule,
    RatingsModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.ghejr18.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
