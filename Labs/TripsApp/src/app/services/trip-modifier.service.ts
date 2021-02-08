import {Injectable} from '@angular/core';
import {GetTripsListService} from './get-trips-list.service';
import {TripModel} from '../models/trip-model';
import {GetMinMaxPricedTripsService} from './get-min-max-priced-trips.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TripModifierService {
  tripsList: TripModel[];

  constructor(
    public tripsService: GetTripsListService,
    public minMaxService: GetMinMaxPricedTripsService,
    public router: Router,
    public authService: AuthenticationService
  ) {
  }

  get authorize() {
    return this.authService.authenticated;
  }

  init() {
    this.tripsService.getTripsList().subscribe(items => {
      this.tripsList = items;
    })
    ;

  }

  /**
   * Increases TripTakenPlaces if possible
   * Returns true if increase was made (if selected places are
   * less than all available)
   * @param trip
   */
  increaseTripTakenPlaces(trip: TripModel): boolean {
    if (!this.authorize) {
      this.router.navigate(['signIn']);
      return;
    }
    if (trip.selected_places < trip.max_places) {
      trip.selected_places += 1;
      this.tripsService.updateTrip(trip.key, trip);
    }
    return trip.selected_places < trip.max_places;
  }

  /**
   * Decreases TripTakenPlaces if possible
   * And returns true if next decrease is possible
   * @param trip
   */
  decreaseTripTakenPlaces(trip: TripModel) {
    if (!this.authorize) {
      this.router.navigate(['signIn']);
      return;
    }
    if (trip.selected_places <= trip.max_places) {
      trip.selected_places -= 1;
      this.tripsService.updateTrip(trip.key, trip);
    }
    return trip.selected_places > 0;
  }

  deleteTrip(trip: TripModel) {
    if (!this.authorize) {
      this.router.navigate(['signIn']);
      return;
    }
    this.minMaxService.removePrice(trip.key);
    this.tripsService.deleteTrip(trip.key);
  }


}
