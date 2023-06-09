import { Test, TestingModule } from '@nestjs/testing';
import { RecoleccionService } from './recoleccion.service';

describe('RecoleccionService', () => {
  let service: RecoleccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecoleccionService],
    }).compile();

    service = module.get<RecoleccionService>(RecoleccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
