import { Test, TestingModule } from '@nestjs/testing';
import { RecoleccionController } from './recoleccion.controller';
import { RecoleccionService } from './recoleccion.service';

describe('RecoleccionController', () => {
  let controller: RecoleccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecoleccionController],
      providers: [RecoleccionService],
    }).compile();

    controller = module.get<RecoleccionController>(RecoleccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
