import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type LugarRecoleccionDocument = HydratedDocument<LugarRecoleccion>;
@Schema()
export class LugarRecoleccion {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const LugarRecoleccionSchema = SchemaFactory.createForClass(LugarRecoleccion);
