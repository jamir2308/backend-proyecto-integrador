import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TipoDesechoDocument = HydratedDocument<TipoDesecho>;
@Schema()
export class TipoDesecho {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const TipoDesechoSchema = SchemaFactory.createForClass(TipoDesecho);