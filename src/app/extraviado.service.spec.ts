import { TestBed } from '@angular/core/testing';

import { ExtraviadoService } from './extraviado.service';

describe('ExtraviadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtraviadoService = TestBed.get(ExtraviadoService);
    expect(service).toBeTruthy();
  });
});
