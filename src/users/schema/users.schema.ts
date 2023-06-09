import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    doc: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
