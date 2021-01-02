import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectedSingleTripComponent} from './selected-single-trip.component';

describe('SelectedSingleTripComponent', () => {
  let component: SelectedSingleTripComponent;
  let fixture: ComponentFixture<SelectedSingleTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedSingleTripComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSingleTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
