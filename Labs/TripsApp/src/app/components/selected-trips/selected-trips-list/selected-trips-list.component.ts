import {Component, OnInit} from '@angular/core';
import {GetTripsListService} from '../../../services/get-trips-list.service';
import {TripModel} from '../../../models/trip-model';

@Component({
  selector: 'app-selected-trips-list',
  templateUrl: './selected-trips-list.component.html',
  styleUrls: ['./selected-trips-list.component.css']
})
export class SelectedTripsListComponent implements OnInit {

  tripsList: TripModel[];

  constructor(private tripsService: GetTripsListService) {
  }

  ngOnInit(): void {
    this.tripsService.getTripsList().subscribe(items => {
      this.tripsList = items;
    });
  }

  getTotalSum() {
    let sum: number = 0;
    for (let item of this.tripsList) {
      if (item.selected_places > 0) {
        sum += item.selected_places * (+item.price);
      }
    }
    return sum;
  }


}
