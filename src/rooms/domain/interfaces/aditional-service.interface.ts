// MOngoose dependencies
import { Document } from "mongoose";

export interface IAditional extends Document {
  price : number,
  description : string
}