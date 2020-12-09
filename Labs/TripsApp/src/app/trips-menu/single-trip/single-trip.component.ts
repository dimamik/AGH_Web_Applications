import {Component, Input, OnInit} from '@angular/core';
import {TripsList} from '../../trips-list-data/trips-list';
import {StarRatingComponent} from 'ng-starrating';


@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {


  ngOnInit(): void {
  }

  isNotFull = true;
  isAddedAny = false;
  currentRate:number = 0;
  @Input() singleTrip;

  deleteClicked() {
    this.singleTrip.selected_places -= 1;
    if (this.singleTrip.selected_places == 0) {
      this.isAddedAny = false;
    }
    if (this.singleTrip.selected_places != this.singleTrip.max_places) {
      this.isNotFull = true;
    }
  }

  addClicked() {
    this.singleTrip.selected_places += 1;
    this.isAddedAny = true;
    if (this.singleTrip.selected_places == this.singleTrip.max_places) {
      this.isNotFull = false;
    }
  }

  deleteTripClicked() {
    TripsList.trips.splice(this.singleTrip, 1);
  }

}
