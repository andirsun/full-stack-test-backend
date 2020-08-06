// MOngoose dependencies
import { Document } from "mongoose";
// External interfaces
import { IAditional } from "./aditional-service.interface";
import { IService } from "./services.interface";
export interface IRoom extends Document {
  number : string,
  description : string,
  price : number
  type : "SINGLE", "DOUBLE", "SUITE";
  urlImg : string,
  services : [IService],
  aditionals : [IAditional]
}