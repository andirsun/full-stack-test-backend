//File use for mongodb schemas
import { Schema } from "mongoose"; 
//Interfaces
import { IHotel } from "src/hotels/domain/interfaces/hotel.interface";
// Schemas
import { RoomSchema } from "src/rooms/infraestructure/schemas/rooms.schema";

export const HotelSchema = new Schema<IHotel>({
  city : String,
  address : String,
  description : String,
  urlImg : String,
  rooms : [RoomSchema]
});
/*PLUGINS ZONE*/