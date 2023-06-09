import { Test, TestingModule } from '@nestjs/testing';
import { TipoDesechoService } from './tipo-desecho.service';

describe('TipoDesechoService', () => {
  let service: TipoDesechoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDesechoService],
    }).compile();

    service = module.get<TipoDesechoService>(TipoDesechoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
