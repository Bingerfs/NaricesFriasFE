import { TestBed } from '@angular/core/testing';

import { BuscadoService } from './buscado.service';

describe('BuscadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscadoService = TestBed.get(BuscadoService);
    expect(service).toBeTruthy();
  });
});
