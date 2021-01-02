import {TestBed} from '@angular/core/testing';

import {GetTripsListService} from './get-trips-list.service';

describe('GetTripsListService', () => {
  let service: GetTripsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTripsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
