import { Test, TestingModule } from '@nestjs/testing';
import { LugarRecoleccionService } from './lugar-recoleccion.service';

describe('LugarRecoleccionService', () => {
  let service: LugarRecoleccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LugarRecoleccionService],
    }).compile();

    service = module.get<LugarRecoleccionService>(LugarRecoleccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
