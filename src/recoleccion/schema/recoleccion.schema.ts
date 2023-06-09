import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Usuario } from '../../users/schema/users.schema';
import { TipoDesecho } from '../../tipo-desecho/schema/tipo-desecho.schema';
import { LugarRecoleccion } from '../../lugar-recoleccion/schema/lugar-recoleccion.schema';

@Schema()
export class Recoleccion extends Document {
  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: Usuario.name })
  idUsuario: Usuario;

  @Prop({ type: Types.ObjectId, ref: TipoDesecho.name })
  idTipoDesecho: TipoDesecho;

  @Prop()
  cantidad: number;

  @Prop({ type: Types.ObjectId, ref: LugarRecoleccion.name })
  idLugarRecoleccion: LugarRecoleccion;
}

export const RecoleccionSchema = SchemaFactory.createForClass(Recoleccion);
