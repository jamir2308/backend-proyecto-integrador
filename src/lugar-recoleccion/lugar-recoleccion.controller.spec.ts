import { Test, TestingModule } from '@nestjs/testing';
import { LugarRecoleccionController } from './lugar-recoleccion.controller';
import { LugarRecoleccionService } from './lugar-recoleccion.service';

describe('LugarRecoleccionController', () => {
  let controller: LugarRecoleccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LugarRecoleccionController],
      providers: [LugarRecoleccionService],
    }).compile();

    controller = module.get<LugarRecoleccionController>(LugarRecoleccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
