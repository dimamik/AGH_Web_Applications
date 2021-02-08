import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetTripsListService} from '../../../services/get-trips-list.service';
import {TripModel} from '../../../models/trip-model';
import {GetMinMaxPricedTripsService} from '../../../services/get-min-max-priced-trips.service';
import {Router} from '@angular/router';
import {TripModifierService} from '../../../services/trip-modifier.service';
import {RoleAccessService} from '../../../core/role-access.service';
import {AuthenticationService} from '../../../core/auth.service';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {

  currentRate: number;
  showDecreaseButton = false;
  showIncreaseButton = true;
  tripList: TripModel[];


  @Input() singleTrip;

  @Output() deleteSelected = new EventEmitter<number>();
  const;

  constructor(
    private tripsService: GetTripsListService,
    public maxMinService: GetMinMaxPricedTripsService,
    private router: Router,
    private tripModifier: TripModifierService,
    public roleAccess: RoleAccessService,
    private authService: AuthenticationService
  ) {

  }


  get authorize() {
    return this.authService.authenticated;
  }


  ngOnInit(): void {
    this.currentRate = this.singleTrip.rating;
    this.tripsService.getTripsList().subscribe(items => {
      this.tripList = items;
    });
    this.tripModifier.init();
    this.showDecreaseButton = this.singleTrip.selected_places > 0;
    this.showIncreaseButton = this.singleTrip.selected_places < this.singleTrip.max_places;
  }

  decreaseTripsTakenCounter() {


    this.showDecreaseButton = this.tripModifier.decreaseTripTakenPlaces(this.singleTrip);
  }

  increaseTripsTakenCounter() {


    this.showIncreaseButton = this.tripModifier.increaseTripTakenPlaces(this.singleTrip);
  }

  deleteTripClicked() {


    this.tripModifier.deleteTrip(this.singleTrip);
  }

  goToTripDetails() {
    if (!this.authorize) {
      this.router.navigate(['signIn']);
      return;
    }
    this.router.navigate(['/trips', this.singleTrip.key]);
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

  goToEdition() {
    this.router.navigate(['/trips/modify', this.singleTrip.key]);
  }
}
