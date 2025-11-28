import { TestBed } from '@angular/core/testing';

import { Investmentservicenew } from './investmentservicenew';

describe('Investmentservicenew', () => {
  let service: Investmentservicenew;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Investmentservicenew);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
