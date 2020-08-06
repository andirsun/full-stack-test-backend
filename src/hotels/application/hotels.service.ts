import { Injectable } from '@nestjs/common';
// Mongoose dependencies
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Dtos
import { CreateHotelDTO } from '../domain/dto/hotel.dto';
import { CreateRoomDTO } from 'src/rooms/domain/dto/room.dto';
// Interfaces
import { IRoom } from 'src/rooms/domain/interfaces/room.interface';
import { IHotel } from '../domain/interfaces/hotel.interface';
import { CreateServiceDTO } from 'src/rooms/domain/dto/service.dto';

@Injectable()
export class HotelsService {
  
  constructor(
    @InjectModel('Rooms') private readonly roomModel : Model<IRoom>,
    @InjectModel('Hotels') private readonly hotelModel : Model<IHotel>,
  ){}
  
  /*
    THis functions search a specific hotel
  */
  async getHotel(idHotel : string){
    return await this.hotelModel.findById(idHotel);
  }
  /*
    THis function create a Hotel. you need to pass the
    CreateHotelDto object to works
  */
  async createHotel(createHotelDTO : CreateHotelDTO) : Promise<IHotel>{
    //create the hotel model with all parameters from interface
    let hotel = new this.hotelModel(createHotelDTO);
    return await hotel.save();
  }
  /*
    THis function create a room and associate to a hotel
  */
  async createRoom(createRoomDTO : CreateRoomDTO) : Promise<IHotel>{
    //create the room model with all parameters from interface
    let room = new this.roomModel(createRoomDTO);
    //Add the current date and registration method
    return await this.hotelModel.findByIdAndUpdate(createRoomDTO.idHotel,{$push : {rooms : room}},{new : true});
  }
  /*
    This function create a new room service or characteristic 
  */
  async createService(idHotel : string,createServiceDTO : CreateServiceDTO){
    let hotel2 = await this.hotelModel.update({"rooms._id" : createServiceDTO.idRoom}, {$push :{'rooms.$.services': createServiceDTO}}, {upsert: true});
    return hotel2
  }
}
