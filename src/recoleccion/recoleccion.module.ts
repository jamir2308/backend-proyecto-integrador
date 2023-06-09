import { Module } from '@nestjs/common';
import { RecoleccionService } from './recoleccion.service';
import { RecoleccionController } from './recoleccion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecoleccionSchema } from './schema/recoleccion.schema';
import { LugarRecoleccionModule } from 'src/lugar-recoleccion/lugar-recoleccion.module';
import { TipoDesechoModule } from 'src/tipo-desecho/tipo-desecho.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
  MongooseModule.forFeature([
      { name: 'Recoleccion', schema: RecoleccionSchema },
    ]),
    UsersModule,
    TipoDesechoModule,
    LugarRecoleccionModule,
  ],
  controllers: [RecoleccionController],
  providers: [RecoleccionService]
})
export class RecoleccionModule {}
