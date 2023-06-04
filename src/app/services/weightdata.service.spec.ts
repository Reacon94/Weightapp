import { TestBed } from '@angular/core/testing';

import { WeightdataService } from './weightdata.service';

describe('WeightdataService', () => {
  let service: WeightdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeightdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
