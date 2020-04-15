import { TestBed } from '@angular/core/testing';

import { TrailsApiService } from './trails-api.service';

describe('TrailsApiService', () => {
  let service: TrailsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
