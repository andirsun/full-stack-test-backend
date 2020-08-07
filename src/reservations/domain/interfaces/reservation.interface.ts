// Mongoose dependencies
import { Document } from "mongoose";
//Interfaces
import { IRoom } from "src/rooms/domain/interfaces/room.interface";

export interface IReservation extends Document {
  date : string,
  name : string,
  document : string,
  totalPrice : number,
  // Date begin reservation
  checkIn : string,
  checkOut : string,
  days : number,
  idHotel : string,
  // Customers can reservate more than 2 rooms
  rooms : [IRoom]
}