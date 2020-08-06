import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { HotelsService } from '../application/hotels.service';
import { CreateHotelDTO } from '../domain/dto/hotel.dto';

@Controller('hotels')
export class HotelsController {
  
  constructor(
    private hotelService : HotelsService
  ){}
  
  /*
    Endpoint to create a new hotel
  */
  @Post('/new')
  async createHotel(@Res() res,@Body() createHotelDTO : CreateHotelDTO ){
    // Using the hotel service to make the used db insertion
    this.hotelService.createHotel(createHotelDTO)
      .then(hotel =>{
        return res.status(HttpStatus.OK).json({
          content:{
            hotel
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
