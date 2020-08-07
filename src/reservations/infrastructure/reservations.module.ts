import { Module } from '@nestjs/common';
import { ReservationsService } from '../application/reservations.service';
import { ReservationsController } from './reservations.controller';
// MOngoose dependencies
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationSchema } from './schemas/reservation.schema';

@Module({
  imports :[
    MongooseModule.forFeature(
      /*
      Fist paremeter : array with the schemas to save in the database
      the second parameter : name database 
      */
      [ 
       //If we need more schemas for user module can import here
       {name:"Reservations",schema : ReservationSchema},
      ],'TocomaDB'
    )
  ],
  providers: [ReservationsService],
  controllers: [ReservationsController]
})
export class ReservationsModule {}
