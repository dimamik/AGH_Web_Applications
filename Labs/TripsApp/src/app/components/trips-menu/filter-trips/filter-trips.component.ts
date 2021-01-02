import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterModel} from '../../../models/filter-model';
import {GetTripsListService} from '../../../services/get-trips-list.service';
import {TripModel} from '../../../models/trip-model';


@Component({
  selector: 'app-filter-trips',
  templateUrl: './filter-trips.component.html',
  styleUrls: ['./filter-trips.component.css']
})
export class FilterTripsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<FilterModel>();
  tripsList: TripModel[];
  filterModel: FilterModel = new FilterModel();

  constructor(private tripsService: GetTripsListService) {
    this.filterModel = new FilterModel();
  }

  ngOnInit(): void {
    this.tripsService.getTripsList().subscribe(items => {
      this.tripsList = items;
    });
  }

  addNewItem(filterModel: FilterModel) {
    this.newItemEvent.emit(filterModel);
  }


  deleteTrip(params) {
    this.tripsList.splice(params, 1);
  }

  resetFilter() {
    this.filterModel = new FilterModel();
    this.addNewItem(this.filterModel);
  }

  submitFilter() {
    this.addNewItem(this.filterModel);
  }
}
