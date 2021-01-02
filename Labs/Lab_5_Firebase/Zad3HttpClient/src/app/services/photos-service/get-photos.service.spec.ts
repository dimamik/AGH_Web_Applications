import {TestBed} from '@angular/core/testing';

import {GetPhotosService} from './get-photos.service';

describe('GetPhotosService', () => {
  let service: GetPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
