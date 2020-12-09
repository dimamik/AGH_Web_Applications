import {Component, OnInit} from '@angular/core';
import {TripsList} from '../../trips-list-data/trips-list';

@Component({
  selector: 'app-selected-trips-list',
  templateUrl: './selected-trips-list.component.html',
  styleUrls: ['./selected-trips-list.component.css']
})
export class SelectedTripsListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  tripsList = TripsList;


  getTotalSum() {
    let sum: number = 0;
    for (let item of this.tripsList.trips) {
      if (item.selected_places > 0) {
        sum += item.selected_places * (+item.price);
      }
    }
    return sum;
  }

}
