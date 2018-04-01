import { TestBed, inject } from '@angular/core/testing';

import { AdvendutureTimeService } from './advenduture-time.service';

describe('AdvendutureTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvendutureTimeService]
    });
  });

  it('should be created', inject([AdvendutureTimeService], (service: AdvendutureTimeService) => {
    expect(service).toBeTruthy();
  }));
});
