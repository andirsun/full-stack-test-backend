// Nest js dependencies
import { Controller, Res, Post, Body, HttpStatus, Get } from '@nestjs/common';
// Services
import { ReservationsService } from '../application/reservations.service';
// Dtos
import { CreateReservationDTO } from '../domain/dto/reservation.dto';

@Controller('reservations')
export class ReservationsController {

  constructor(
    private reservationServices : ReservationsService
  ){}
  
  /* Endpoint to make a single reservation by user */
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
  /* Endpoint to get all reservations by user */
  @Get('/all')
  async getReservations(@Res() res){
    this.reservationServices.getReservations()
      .then(reservations =>{
        return res.status(HttpStatus.OK).json({
          content:{
            reservations
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
