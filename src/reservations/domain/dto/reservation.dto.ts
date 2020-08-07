// Interfaces
import { IRoom } from "src/rooms/domain/interfaces/room.interface";

export class CreateReservationDTO {
  readonly date : string;
  readonly name : string;
  readonly document : string;
  readonly totalPrice : number;
  // Date begin reservation
  readonly checkIn : string;
  readonly checkOut : string;
  readonly days : number;
  readonly idHotel : string;
  // Customers can reservate more than 2 rooms
  readonly rooms : [IRoom]
}