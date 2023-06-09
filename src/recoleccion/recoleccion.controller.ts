import { CreateRecoleccionDto } from './dto/create-recoleccion.dto';
import { UpdateRecoleccionDto } from './dto/update-recoleccion.dto';

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Recoleccion } from './schema/recoleccion.schema';
import { RecoleccionService } from './recoleccion.service';

@Controller('recoleccion')
export class RecoleccionController {
  constructor(private recopilacionService: RecoleccionService) { }

  @Get()
  async findAll(): Promise<Recoleccion[]> {
    return this.recopilacionService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Recoleccion> {
    return this.recopilacionService.findById(id
    );
  }

  @Post()
  async create(@Body() recoleccion: Recoleccion): Promise<Recoleccion> {
    return this.recopilacionService.create(recoleccion);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() recoleccion: Recoleccion,
  ): Promise<Recoleccion> {
    return this.recopilacionService.update(id, recoleccion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Recoleccion> {
    return this.recopilacionService.delete(id);
  }
}
