import {TestBed} from '@angular/core/testing';

import {GetMinMaxPricedTripsService} from './get-min-max-priced-trips.service';

describe('GetMinMaxPricedTripsService', () => {
  let service: GetMinMaxPricedTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMinMaxPricedTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
