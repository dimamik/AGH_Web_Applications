import {TestBed} from '@angular/core/testing';

import {RoleAccessService} from './role-access.service';

describe('RoleAccessService', () => {
  let service: RoleAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
