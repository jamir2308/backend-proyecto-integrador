import { Module } from '@nestjs/common';
import { TipoDesechoService } from './tipo-desecho.service';
import { TipoDesechoController } from './tipo-desecho.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TipoDesechoSchema } from './schema/tipo-desecho.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
      { name: 'TipoDesecho', schema: TipoDesechoSchema },
    ]),
  ],
  controllers: [TipoDesechoController],
  providers: [TipoDesechoService]
})
export class TipoDesechoModule {}
