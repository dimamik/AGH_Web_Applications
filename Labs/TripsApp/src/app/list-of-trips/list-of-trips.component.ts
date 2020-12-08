import {Component, OnInit} from '@angular/core';
import {TripsList} from '../trips-list/trips-list';

@Component({
  selector: 'app-list-of-trips',
  templateUrl: './list-of-trips.component.html',
  styleUrls: ['./list-of-trips.component.css']
})
export class ListOfTripsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  items = TripsList.trips;
}
