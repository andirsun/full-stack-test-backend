// Mongoose dependencies
import { Document } from "mongoose";

export interface IReservation extends Document {
  date : string,
  name : string,
  document : string,
  totalPrice : string,
  // Date begin reservation
  checkIn : string,
  checkOut : string,
  days : number
  paymentMethod : string
}