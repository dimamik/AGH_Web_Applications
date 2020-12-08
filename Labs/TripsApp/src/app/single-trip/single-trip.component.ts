import {Component, Input, OnInit} from '@angular/core';
import {TripsList} from '../trips-list/trips-list';


@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {


  ngOnInit(): void {
  }

  isNotFull = true;
  isAddedAny = false;

  @Input() singleTrip;
  deleteClicked($event: MouseEvent) {
      this.singleTrip.selected_places -= 1;
      if (this.singleTrip.selected_places == 0) {
        this.isAddedAny = false;
      }
      if (this.singleTrip.selected_places!= this.singleTrip.max_places) {
        this.isNotFull = true;
      }
  }

  addClicked($event: MouseEvent) {
      this.singleTrip.selected_places += 1;
      this.isAddedAny = true;
      if (this.singleTrip.selected_places == this.singleTrip.max_places) {
        this.isNotFull = false;
      }
  }

  deleteTripClicked($event: MouseEvent) {
    TripsList.trips.splice(this.singleTrip, 1);
  }
}
