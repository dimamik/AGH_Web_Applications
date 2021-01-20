import { TestBed } from '@angular/core/testing';

import { FireManipulatorService } from './fire-manipulator.service';

describe('FireManilupatorService', () => {
  let service: FireManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
