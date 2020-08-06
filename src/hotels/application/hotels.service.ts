import { Injectable } from '@nestjs/common';
// Mongoose dependencies
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IHotel } from '../domain/interfaces/hotel.interface';
// Dtos
import { CreateHotelDTO } from '../domain/dto/hotel.dto';

@Injectable()
export class HotelsService {
  
  constructor(
    @InjectModel('Hotels') private readonly hotelModel : Model<IHotel>,
  ){}

  /*
    THis function create a Hotel. you need to pass the
    CreateHotelDto object to works
  */
  async createHotel(createHotelDTO : CreateHotelDTO) : Promise<IHotel>{
    //create the user model with all parameters from interface
    let hotel = new this.hotelModel(createHotelDTO);
    //Add the current date and registration method
    return await hotel.save();
  }
}
