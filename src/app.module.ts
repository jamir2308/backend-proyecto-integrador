import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TipoDesechoModule } from './tipo-desecho/tipo-desecho.module';
import { RecoleccionModule } from './recoleccion/recoleccion.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://test_consultansDB:j5xQpm5GB0TEQLvG@clusterconsultans.hba8evw.mongodb.net/'),
    UsersModule,
    AuthModule,
    TipoDesechoModule,
    RecoleccionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
