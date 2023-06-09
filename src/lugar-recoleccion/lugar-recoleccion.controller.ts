import { LugarRecoleccionService } from './lugar-recoleccion.service';
import { CreateLugarRecoleccionDto } from './dto/create-lugar-recoleccion.dto';
import { UpdateLugarRecoleccionDto } from './dto/update-lugar-recoleccion.dto';

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LugarRecoleccion } from './schema/lugar-recoleccion.schema';

@Controller('lugar-recoleccion')
export class LugarRecoleccionController {
  constructor(private lugarRecoleccionService: LugarRecoleccionService) {}

  @Get()
  async findAll(): Promise<LugarRecoleccion[]> {
    return this.lugarRecoleccionService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionService.findById(id);
  }

  @Post()
  async create(@Body() lugarRecoleccion: LugarRecoleccion): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionService.create(lugarRecoleccion);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() lugarRecoleccion: LugarRecoleccion,
  ): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionService.update(id, lugarRecoleccion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionService.delete(id);
  }
}

