import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTripsComponent } from './rating-trips.component';

describe('RatingTripsComponent', () => {
  let component: RatingTripsComponent;
  let fixture: ComponentFixture<RatingTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
