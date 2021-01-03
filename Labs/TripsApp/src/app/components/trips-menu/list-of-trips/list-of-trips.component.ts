import {Component, OnInit} from '@angular/core';
import {FilterModel} from '../../../models/filter-model';
import {GetTripsListService} from '../../../services/get-trips-list.service';
import {TripModel} from '../../../models/trip-model';
import {GetMinMaxPricedTripsService} from '../../../services/get-min-max-priced-trips.service';

@Component({
  selector: 'app-list-of-trips',
  templateUrl: './list-of-trips.component.html',
  styleUrls: ['./list-of-trips.component.css']
})
export class ListOfTripsComponent implements OnInit {
  filterModel: FilterModel;
  isFilterShowing = false;
  tripsList: TripModel[];


  constructor(
    public tripsService: GetTripsListService,
    public minMaxService: GetMinMaxPricedTripsService,
  ) {
    this.filterModel = new FilterModel();

  }

  ngOnInit(): void {
    this.tripsService.getTripsList().subscribe(items => {
      this.tripsList = items;
      this.minMaxService.createArray(items);
    })
    ;
  }


  addItem(filterModel: FilterModel) {
    this.filterModel = filterModel;
  }

  //
  // deleteTrip(params) {
  //   // this.tripsList.splice(params, 1);
  // }


  showFilter() {
    this.isFilterShowing = !this.isFilterShowing;
  }

}
