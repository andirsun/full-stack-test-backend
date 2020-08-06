import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Mongoose ORM Database Module COnection
import { MongooseModule } from "@nestjs/mongoose";
// .env dependencies
require("dotenv").config();
//import { ConfigModule } from '@nestjs/config';
// App Modules
import { RoomsModule } from './rooms/infraestructure/rooms.module';
import { HotelsModule } from './hotels/infrastructure/hotels.module';
import { ReservationsModule } from './reservations/infrastructure/reservations.module';

@Module({
  imports: [
    /* App Modules */
    HotelsModule,
    RoomsModule,
    /* .env variables */
    // ConfigModule.forRoot({
    //   envFilePath : '.env',
    //   isGlobal : true
    // }),
    /* Databases Modules */ 
    MongooseModule.forRoot(process.env.DB_PROD , {
      connectionName : 'TocomaDB',
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
