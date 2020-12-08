import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTripsListComponent } from './selected-trips-list.component';

describe('SelectedTripsListComponent', () => {
  let component: SelectedTripsListComponent;
  let fixture: ComponentFixture<SelectedTripsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedTripsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTripsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
