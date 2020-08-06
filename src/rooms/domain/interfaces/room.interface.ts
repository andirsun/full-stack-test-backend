// MOngoose dependencies
import { Document } from "mongoose";
// External interfaces
import { IAditional } from "./aditional-service.interface";
import { IService } from "./services.interface";
export interface IRoom extends Document {
  number : string,
  price : number
  type : "SINGLE", "DOUBLE", "SUITE";
  services : [IService],
  aditionals : [IAditional]
}