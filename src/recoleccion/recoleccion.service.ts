import { Injectable } from '@nestjs/common';
import { CreateRecoleccionDto } from './dto/create-recoleccion.dto';
import { UpdateRecoleccionDto } from './dto/update-recoleccion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recoleccion } from './schema/recoleccion.schema';

@Injectable()
export class RecoleccionService {
  constructor(
    @InjectModel(Recoleccion.name)
    private recopilacionModel: Model<Recoleccion>,
  ) {}

  async findAll(): Promise<Recoleccion[]> {
    return this.recopilacionModel.find().exec();
  }

  async findById(id: string): Promise<Recoleccion> {
    return this.recopilacionModel.findById(id).exec();
  }

  async create(recoleccion: Recoleccion): Promise<Recoleccion> {
    const createdRecoleccion = new this.recopilacionModel(recoleccion);
    return createdRecoleccion.save();
  }

  async update(id: string, recoleccion: Recoleccion): Promise<Recoleccion> {
    return this.recopilacionModel.findByIdAndUpdate(id, recoleccion, { new: true }).exec();
  }

  async delete(id: string): Promise<Recoleccion> {
    return this.recopilacionModel.findByIdAndRemove(id).exec();
  }
}

