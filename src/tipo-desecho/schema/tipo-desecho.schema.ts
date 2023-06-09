import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TipoDesecho extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const TipoDesechoSchema = SchemaFactory.createForClass(TipoDesecho);