import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Mongoose ORM Database Module COnection
import { MongooseModule } from "@nestjs/mongoose";
// .env dependencies
//import { ConfigModule } from '@nestjs/config';
require("dotenv").config();

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
