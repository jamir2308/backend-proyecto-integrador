import { Module } from '@nestjs/common';
import { RecoleccionService } from './recoleccion.service';
import { RecoleccionController } from './recoleccion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Recoleccion, RecoleccionSchema } from './schema/recoleccion.schema';
import { UsersModule } from '../users/users.module';
import { TipoDesechoModule } from '../tipo-desecho/tipo-desecho.module';
import { LugarRecoleccionModule } from '../lugar-recoleccion/lugar-recoleccion.module';


@Module({
  imports: [
  MongooseModule.forFeature([
      { name: Recoleccion.name, schema: RecoleccionSchema },
    ]),
    UsersModule,
    TipoDesechoModule,
    LugarRecoleccionModule,
  ],
  controllers: [RecoleccionController],
  providers: [RecoleccionService]
})
export class RecoleccionModule {}
