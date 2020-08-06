//File use for mongodb schemas
import { Schema } from "mongoose"; 
//Interfaces
import { IRoom } from "src/rooms/domain/interfaces/room.interface";

let validRoomTypes = {
  values: ["SINGLE", "DOUBLE", "SUITE"],
  message: "{VALUE} is not a valid room type"
};
// External Schemas
const ServiceSchema = new Schema({
  description : String
});
const AditionalSchema = new Schema({
  price : Number,
  description : String,
});
// Main Schema
export const RoomSchema = new Schema<IRoom>({
  number : Number,
  price : Number,
  urlImg : String,
  description :String,
  type : {
    type : String,
    enum : validRoomTypes
  },
  services : [ServiceSchema],
  aditionals : [AditionalSchema]
});
/*PLUGINS ZONE*/

