import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IReservation } from '../domain/interfaces/reservation.interface';
import { CreateReservationDTO } from '../domain/dto/reservation.dto';

@Injectable()
export class ReservationsService {
  
  constructor(
    @InjectModel('Reservations') private readonly reservationModel : Model<IReservation>,
  ){}
  
  /*
    THis function insert create and insert a new reservation into database
  */
  async makeReservation(createReservationDTO : CreateReservationDTO) : Promise<IReservation>{
    const reservation = new this.reservationModel(createReservationDTO);
    return await reservation.save();
  }
}
