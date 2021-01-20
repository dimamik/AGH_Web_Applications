import { Component, OnInit } from '@angular/core';
import {TripModel} from '../../models/trip-model';
import {ActivatedRoute, Router} from '@angular/router';
import {GetTripsListService} from '../../services/get-trips-list.service';
import {GetMinMaxPricedTripsService} from '../../services/get-min-max-priced-trips.service';
import {TripModifierService} from '../../services/trip-modifier.service';
import {RoleAccessService} from '../../core/role-access.service';

@Component({
  selector: 'app-modify-trip',
  templateUrl: './modify-trip.component.html',
  styleUrls: ['./modify-trip.component.css']
})
export class ModifyTripComponent implements OnInit {


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
    private tripModifier: TripModifierService,
    public roleAccess: RoleAccessService
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
}
