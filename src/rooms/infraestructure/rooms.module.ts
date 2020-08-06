import { Module } from '@nestjs/common';
import { RoomsService } from '../application/rooms.service';
import { RoomsController } from './rooms.controller';
import { MongooseModule } from '@nestjs/mongoose';
// DB Schemas
import { RoomSchema } from "./schemas/rooms.schema";

@Module({
  imports :[
    MongooseModule.forFeature(
      /*
        Fist paremeter : array with the schemas to save in the database
        the second parameter : name database 
      */
      [ 
        //If we need more schemas for user module can import here
        {name:"Rooms",schema : RoomSchema}
      ],'TocomaDB'),
    // Other module is required need to import here
  ],
  providers: [RoomsService],
  controllers: [RoomsController]
})
export class RoomsModule {}
