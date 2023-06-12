import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './schema/users.schema';

@Module({
  imports:[
  MongooseModule.forFeature([
    { name: Usuario.name,
    schema: UsuarioSchema }
  ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
