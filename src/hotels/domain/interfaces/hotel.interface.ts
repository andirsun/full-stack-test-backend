// Mongoose dependencies
import { Document } from "mongoose";
// External interfaces
import { IRoom } from "../../../rooms/domain/interfaces/room.interface";

export interface IHotel extends Document {
  address : string,
  city : string,
  description : string
  rooms : [IRoom]
};