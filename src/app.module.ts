import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TipoDesechoModule } from './tipo-desecho/tipo-desecho.module';
import { LugarRecoleccionModule } from './lugar-recoleccion/lugar-recoleccion.module';
import { RecoleccionModule } from './recoleccion/recoleccion.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://test_consultansDB:j5xQpm5GB0TEQLvG@clusterconsultans.hba8evw.mongodb.net/'),
    AuthModule,
    TipoDesechoModule,
    LugarRecoleccionModule,
    RecoleccionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
