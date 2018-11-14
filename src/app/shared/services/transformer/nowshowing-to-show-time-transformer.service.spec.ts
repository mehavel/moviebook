import { TestBed, inject } from '@angular/core/testing';

import { NowshowingToShowTimeTransformerService } from './nowshowing-to-show-time-transformer.service';

describe('NowshowingToShowTimeTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NowshowingToShowTimeTransformerService]
    });
  });

  it('should be created', inject([NowshowingToShowTimeTransformerService], (service: NowshowingToShowTimeTransformerService) => {
    expect(service).toBeTruthy();
  }));
});
