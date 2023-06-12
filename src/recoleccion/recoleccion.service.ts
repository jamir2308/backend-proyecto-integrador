import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recoleccion, RecoleccionDocument } from './schema/recoleccion.schema';

@Injectable()
export class RecoleccionService {
  constructor(
    @InjectModel(Recoleccion.name)
    private recopilacionModel: Model<RecoleccionDocument>,
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

