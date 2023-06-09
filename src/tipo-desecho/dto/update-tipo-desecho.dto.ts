import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDesechoDto } from './create-tipo-desecho.dto';

export class UpdateTipoDesechoDto extends PartialType(CreateTipoDesechoDto) {}
