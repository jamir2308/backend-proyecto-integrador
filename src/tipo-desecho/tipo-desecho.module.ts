import { Module } from '@nestjs/common';
import { TipoDesechoService } from './tipo-desecho.service';
import { TipoDesechoController } from './tipo-desecho.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoDesecho, TipoDesechoSchema } from './schema/tipo-desecho.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
      { name: TipoDesecho.name, schema: TipoDesechoSchema },
    ]),
  ],
  controllers: [TipoDesechoController],
  providers: [TipoDesechoService]
})
export class TipoDesechoModule {}
