export class CreateRoomDTO {
  readonly number : string;
  readonly price : number;
  readonly description : string;
  readonly type : "SINGLE" | "DOUBLE" | "SUITE";
  readonly urlImg : string;
  readonly idHotel : string;
}