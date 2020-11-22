import { TestBed } from '@angular/core/testing';

import { ListGetterService } from './list-getter.service';

describe('ListGetterService', () => {
  let service: ListGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
