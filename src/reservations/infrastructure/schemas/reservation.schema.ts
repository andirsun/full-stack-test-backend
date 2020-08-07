//File use for mongodb schemas
import { Schema } from "mongoose"; 
//Interfaces
// Schemas
import { RoomSchema } from "src/rooms/infraestructure/schemas/rooms.schema";
import { IReservation } from "src/reservations/domain/interfaces/reservation.interface";

export const ReservationSchema = new Schema<IReservation>({
  date : String,
  name : String,
  document : String,
  totalPrice : Number,
  // Date begin reservation
  checkIn : String,
  checkOut : String,
  days : Number,
  // Customers can reservate more than 2 rooms
  idHolel : String,
  rooms : [RoomSchema]
});
/*PLUGINS ZONE*/