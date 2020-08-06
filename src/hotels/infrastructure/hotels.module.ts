import { Module } from '@nestjs/common';
import { HotelsService } from '../application/hotels.service';
import { HotelsController } from './hotels.controller';

@Module({
  providers: [HotelsService],
  controllers: [HotelsController]
})
export class HotelsModule {}
