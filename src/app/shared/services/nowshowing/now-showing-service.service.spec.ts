import { TestBed, inject } from '@angular/core/testing';

import { NowShowingServiceService } from './now-showing-service.service';

describe('NowShowingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NowShowingServiceService]
    });
  });

  it('should be created', inject([NowShowingServiceService], (service: NowShowingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
