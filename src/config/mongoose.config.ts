import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: `mongodb+srv://${configService.get('DATABASE_USER')}:${configService.get(
      'DATABASE_PASSWORD',
    )}@cluster0.ghejr18.mongodb.net/${configService.get(
      'DATABASE_NAME',
    )}?retryWrites=true&w=majority&appName=Cluster0`,
  };
};
