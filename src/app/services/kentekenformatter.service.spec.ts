import { TestBed } from '@angular/core/testing';

import { KentekenformatterService } from './kentekenformatter.service';

describe('KentekenformatterService', () => {
  let service: KentekenformatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KentekenformatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
