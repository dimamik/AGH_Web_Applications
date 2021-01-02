import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTripComponent} from './add-trip.component';

describe('FormTripComponent', () => {
  let component: AddTripComponent;
  let fixture: ComponentFixture<AddTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTripComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});