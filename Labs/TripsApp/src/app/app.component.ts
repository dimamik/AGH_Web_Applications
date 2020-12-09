import {Component} from '@angular/core';
import {TripsList} from './trips-list-data/trips-list';
import {Trip} from './trips-list-data/trip';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TripsApp';

  tripList = TripsList.trips;

  addToListOfTrips(tripToAdd: Trip) {
    this.tripList.push(tripToAdd);
  }
}

