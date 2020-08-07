import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
// Services
import { HotelsService } from '../application/hotels.service';
// Dtos
import { CreateHotelDTO } from '../domain/dto/hotel.dto';
import { CreateRoomDTO } from 'src/rooms/domain/dto/room.dto';
import { CreateServiceDTO } from 'src/rooms/domain/dto/service.dto';
import { CreateAditionalDTO } from 'src/rooms/domain/dto/aditional.dto';

@Controller('hotels')
export class HotelsController {
  
  constructor(
    private hotelService : HotelsService
  ){}
  
  /*
    Endpoint to fetch all hotels
  */
  @Get('/all')
  async getHotels(@Res() res){
    // Using the hotel service to make the used db insertion
    this.hotelService.getHotels()
      .then(hotels =>{
        return res.status(HttpStatus.OK).json({
          content:{
            hotels
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

  @Post('/rooms/new')
  async createNewRoom(@Res()res, @Body() createRoomDTO: CreateRoomDTO){
    this.hotelService.createRoom(createRoomDTO)
      .then(hotel =>{
        return res.status(HttpStatus.OK).json({
          content:{
            rooms : hotel.rooms
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

  @Post('/rooms/services/new')
  async createNewRoomService(@Res()res, @Body() createServiceDTO: CreateServiceDTO){
    this.hotelService.createService(createServiceDTO)
      .then(response =>{
        return res.status(HttpStatus.OK).json({
          content:{
            response
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

  @Post('/rooms/aditionals/new')
  async createNewRoomAditionalService(@Res()res, @Body() createAditionalDTO: CreateAditionalDTO){
    this.hotelService.createAditional(createAditionalDTO)
      .then(response =>{
        return res.status(HttpStatus.OK).json({
          content:{
            response
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
