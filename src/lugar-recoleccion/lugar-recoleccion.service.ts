import { Injectable } from '@nestjs/common';
import { CreateLugarRecoleccionDto } from './dto/create-lugar-recoleccion.dto';
import { UpdateLugarRecoleccionDto } from './dto/update-lugar-recoleccion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LugarRecoleccion } from './schema/lugar-recoleccion.schema';

@Injectable()
export class LugarRecoleccionService {
  constructor(
    @InjectModel(LugarRecoleccion.name)
    private lugarRecoleccionModel: Model<LugarRecoleccion>,
  ) {}

  async findAll(): Promise<LugarRecoleccion[]> {
    return this.lugarRecoleccionModel.find().exec();
  }

  async findById(id: string): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionModel.findById(id).exec();
  }

  async create(lugarRecoleccion: LugarRecoleccion): Promise<LugarRecoleccion> {
    const createdLugarRecoleccion = new this.lugarRecoleccionModel(lugarRecoleccion);
    return createdLugarRecoleccion.save();
  }

  async update(id: string, lugarRecoleccion: LugarRecoleccion): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionModel.findByIdAndUpdate(id, lugarRecoleccion, { new: true }).exec();
  }

  async delete(id: string): Promise<LugarRecoleccion> {
    return this.lugarRecoleccionModel.findByIdAndRemove(id).exec();
  }
}

