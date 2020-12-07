import {Component, OnInit} from '@angular/core';

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

  trips = [
    {
      'name': 'name',
      'country': 'country',
      'data_start': 'data_start',
      'data_end': 'data_end',
      'price': 'price',
      'max_places': 'max_places'
    }
  ];
}
