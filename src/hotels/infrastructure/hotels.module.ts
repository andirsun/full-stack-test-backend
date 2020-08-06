import { Module } from '@nestjs/common';
import { HotelsService } from '../application/hotels.service';
import { HotelsController } from './hotels.controller';
// External Schemas
import { HotelSchema } from './schemas/hotel.shema';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsModule } from 'src/rooms/infraestructure/rooms.module';
import { RoomSchema } from 'src/rooms/infraestructure/schemas/rooms.schema';

@Module({
  imports :[
    MongooseModule.forFeature(
      /*
      Fist paremeter : array with the schemas to save in the database
      the second parameter : name database 
      */
      [ 
       //If we need more schemas for user module can import here
       {name:"Rooms",schema : RoomSchema},
       {name:"Hotels",schema : HotelSchema}
      ],'TocomaDB'
    ),
    RoomsModule,
  ],
  providers: [HotelsService],
  controllers: [HotelsController],
  exports : [HotelsService]
})
export class HotelsModule {}
