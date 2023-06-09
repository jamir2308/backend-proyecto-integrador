import { PartialType } from '@nestjs/mapped-types';
import { CreateLugarRecoleccionDto } from './create-lugar-recoleccion.dto';

export class UpdateLugarRecoleccionDto extends PartialType(CreateLugarRecoleccionDto) {}
