import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LugarRecoleccion extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const LugarRecoleccionSchema = SchemaFactory.createForClass(LugarRecoleccion);
