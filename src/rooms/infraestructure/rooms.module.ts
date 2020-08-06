import { Module } from '@nestjs/common';
import { RoomsService } from '../application/rooms.service';
import { RoomsController } from './rooms.controller';

@Module({
  providers: [RoomsService],
  controllers: [RoomsController]
})
export class RoomsModule {}
