import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetTripsListService} from '../../../services/get-trips-list.service';
import {TripModel} from '../../../models/trip-model';
import {GetMinMaxPricedTripsService} from '../../../services/get-min-max-priced-trips.service';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {
  isNotFull = true;
  isAddedAny = false;
  currentRate: number;
  tripList: TripModel[];
  @Input() singleTrip;
  @Output() deleteSelected = new EventEmitter<number>();
  const;

  constructor(
    private tripsService: GetTripsListService,
    public maxMinService: GetMinMaxPricedTripsService
  ) {
  }

  ngOnInit(): void {
    this.currentRate = this.singleTrip.rating;
    this.tripsService.getTripsList().subscribe(items => {
      this.tripList = items;
    });
  }


  deleteClicked() {
    this.singleTrip.selected_places -= 1;
    if (this.singleTrip.selected_places == 0) {
      this.isAddedAny = false;
    }
    if (this.singleTrip.selected_places != this.singleTrip.max_places) {
      this.isNotFull = true;
    }
    this.tripsService.updateTrip(this.singleTrip.key, this.singleTrip);

  }

  addClicked() {
    this.singleTrip.selected_places += 1;
    this.isAddedAny = true;
    if (this.singleTrip.selected_places == this.singleTrip.max_places) {
      this.isNotFull = false;
    }
    this.tripsService.updateTrip(this.singleTrip.key, this.singleTrip);
  }

  deleteTripClicked() {
    this.maxMinService.removePrice(this.singleTrip.key);
    this.deleteSelected.emit(this.tripList.indexOf(this.singleTrip));
    this.tripsService.deleteTrip(this.singleTrip.key);

  }

  setRating(param) {
    this.singleTrip.rating = param;
    this.tripsService.updateTrip(this.singleTrip.key, this.singleTrip);
  }

  isMax(): boolean {
    return this.maxMinService.maxKey == this.singleTrip.key;
  }

  isMin(): boolean {
    return this.maxMinService.minKey == this.singleTrip.key;
  }

}
