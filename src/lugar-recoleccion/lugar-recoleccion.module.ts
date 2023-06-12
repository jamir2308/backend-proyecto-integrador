import { Module } from '@nestjs/common';
import { LugarRecoleccionService } from './lugar-recoleccion.service';
import { LugarRecoleccionController } from './lugar-recoleccion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LugarRecoleccion, LugarRecoleccionSchema } from './schema/lugar-recoleccion.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
      { name: LugarRecoleccion.name, schema: LugarRecoleccionSchema },
    ]),
  ],
  controllers: [LugarRecoleccionController],
  providers: [LugarRecoleccionService]
})
export class LugarRecoleccionModule {}
