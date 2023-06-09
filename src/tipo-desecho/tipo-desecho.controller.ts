import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TipoDesechoService } from './tipo-desecho.service';
import { CreateTipoDesechoDto } from './dto/create-tipo-desecho.dto';
import { UpdateTipoDesechoDto } from './dto/update-tipo-desecho.dto';
import { TipoDesecho } from './schema/tipo-desecho.schema';

@Controller('tipo-desecho')
export class TipoDesechoController {
  constructor(private tipoDesechoService: TipoDesechoService) { }

  @Get()
  async findAll(): Promise<TipoDesecho[]> {
    return this.tipoDesechoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<TipoDesecho> {
    return this.tipoDesechoService.findById(id);
  }

  @Post()
  async create(@Body() tipoDesecho: TipoDesecho): Promise<TipoDesecho> {
    return this.tipoDesechoService.create(tipoDesecho);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() tipoDesecho: TipoDesecho,
  ): Promise<TipoDesecho> {
    return this.tipoDesechoService.update(id, tipoDesecho);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TipoDesecho> {
    return this.tipoDesechoService.delete(id);
  }
}

