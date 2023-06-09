import { Injectable } from '@nestjs/common';
import { CreateTipoDesechoDto } from './dto/create-tipo-desecho.dto';
import { UpdateTipoDesechoDto } from './dto/update-tipo-desecho.dto';
import { Model } from 'mongoose';
import { TipoDesecho } from './schema/tipo-desecho.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoDesechoService {
  constructor(
    @InjectModel(TipoDesecho.name)
    private tipoDesechoModel: Model<TipoDesecho>,
  ) {}

  async findAll(): Promise<TipoDesecho[]> {
    return this.tipoDesechoModel.find().exec();
  }

  async findById(id: string): Promise<TipoDesecho> {
    return this.tipoDesechoModel.findById(id).exec();
  }

  async create(tipoDesecho: TipoDesecho): Promise<TipoDesecho> {
    const createdTipoDesecho = new this.tipoDesechoModel(tipoDesecho);
    return createdTipoDesecho.save();
  }

  async update(id: string, tipoDesecho: TipoDesecho): Promise<TipoDesecho> {
    return this.tipoDesechoModel.findByIdAndUpdate(id, tipoDesecho, { new: true }).exec();
  }

  async delete(id: string): Promise<TipoDesecho> {
    return this.tipoDesechoModel.findByIdAndRemove(id).exec();
  }
}
