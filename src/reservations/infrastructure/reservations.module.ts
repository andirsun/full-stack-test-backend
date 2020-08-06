import { Module } from '@nestjs/common';
import { ReservationsService } from '../application/reservations.service';
import { ReservationsController } from './reservations.controller';

@Module({
  providers: [ReservationsService],
  controllers: [ReservationsController]
})
export class ReservationsModule {}
