import {TestBed} from '@angular/core/testing';

import {TripModifierService} from './trip-modifier.service';

describe('TripModifierService', () => {
  let service: TripModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
