import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TripsList} from '../../trips-list-data/trips-list';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {
  isNotFull = true;
  isAddedAny = false;
  currentRate: number;
  tripList = TripsList;
  @Input() singleTrip;
  @Input() highest;
  @Input() cheaper;
  @Output() deleteSelected = new EventEmitter<number>();

  ngOnInit(): void {
    this.currentRate = this.singleTrip.rating;
  }

  isHigh() {
    return this.tripList.trips.indexOf(this.singleTrip) == this.highest;

  }


  isLowest() {
    return this.tripList.trips.indexOf(this.singleTrip) == this.cheaper;

  }

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

    this.deleteSelected.emit(this.tripList.trips.indexOf(this.singleTrip));
  }

  setRating(param) {
    this.singleTrip.rating = param;
  }
}
