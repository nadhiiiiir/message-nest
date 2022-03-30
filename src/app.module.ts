import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MessageModule } from './message/message.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/messagedb'),
    MessageModule,

    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
