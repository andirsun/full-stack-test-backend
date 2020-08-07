import { Controller, Res, Post, Body, HttpStatus } from '@nestjs/common';
import { ReservationsService } from '../application/reservations.service';
import { CreateReservationDTO } from '../domain/dto/reservation.dto';

@Controller('reservations')
export class ReservationsController {

  constructor(
    private reservationServices : ReservationsService
  ){}

  @Post('/new')
  async makeReservation(@Res() res, @Body()createReservationDTO : CreateReservationDTO){
    this.reservationServices.makeReservation(createReservationDTO)
      .then(reservation =>{
        return res.status(HttpStatus.OK).json({
          content:{
            reservation
          }
        })
      })
      .catch(err =>{
        res.status(HttpStatus.BAD_REQUEST).json({
          content : {
            message: 'Ups! Ha ocurrido un error'
          }
        })
        throw new Error(err);
      });
  }
}
