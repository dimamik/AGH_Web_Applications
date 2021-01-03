import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripModel} from '../../models/trip-model';
import {GetTripsListService} from '../../services/get-trips-list.service';
import {GetMinMaxPricedTripsService} from '../../services/get-min-max-priced-trips.service';
import {TripModifierService} from '../../services/trip-modifier.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  currentRate: number;
  showDecreaseButton = false;
  showIncreaseButton = true;
  key: string;
  singleTrip: TripModel = new TripModel
  ('', '', '', '', '', '', 0);

  constructor(
    private route: ActivatedRoute,
    private tripService: GetTripsListService,
    public maxMinService: GetMinMaxPricedTripsService,
    private router: Router,
    private tripModifier: TripModifierService
  ) {
  }

  ngOnInit(): void {
    this.key = this.route.snapshot.paramMap.get('key');
    this.tripService.getTripsList().subscribe(items => {
      this.singleTrip = items.filter((trip) => trip.key == this.key)[0];
      this.tripModifier.init();
      this.showDecreaseButton = this.singleTrip.selected_places > 0;
      this.showIncreaseButton = this.singleTrip.selected_places < this.singleTrip.max_places;

    });
  }

  setRating(param) {
    this.singleTrip.rating = param;
    this.tripService.updateTrip(this.singleTrip.key, this.singleTrip);
  }

  decreaseTripsTakenCounter() {
    this.showDecreaseButton = this.tripModifier.decreaseTripTakenPlaces(this.singleTrip);
  }

  increaseTripsTakenCounter() {
    this.showIncreaseButton = this.tripModifier.increaseTripTakenPlaces(this.singleTrip);
  }

  deleteTripClicked() {
    this.tripModifier.deleteTrip(this.singleTrip);
    this.router.navigate(['/trips']);
  }

}
