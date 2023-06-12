import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Usuario } from '../../users/schema/users.schema';
import { TipoDesecho } from '../../tipo-desecho/schema/tipo-desecho.schema';
import { LugarRecoleccion } from '../../lugar-recoleccion/schema/lugar-recoleccion.schema';

export type RecoleccionDocument = HydratedDocument<Recoleccion>;

@Schema()
export class Recoleccion {
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
