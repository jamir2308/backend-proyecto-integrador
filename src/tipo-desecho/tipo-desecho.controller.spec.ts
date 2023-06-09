import { Test, TestingModule } from '@nestjs/testing';
import { TipoDesechoController } from './tipo-desecho.controller';
import { TipoDesechoService } from './tipo-desecho.service';

describe('TipoDesechoController', () => {
  let controller: TipoDesechoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoDesechoController],
      providers: [TipoDesechoService],
    }).compile();

    controller = module.get<TipoDesechoController>(TipoDesechoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
