import {Component, Input, OnInit} from '@angular/core';
import {TripModel} from '../../../models/trip-model';

@Component({
  selector: 'app-selected-single-trip',
  templateUrl: './selected-single-trip.component.html',
  styleUrls: ['./selected-single-trip.component.css']
})
export class SelectedSingleTripComponent implements OnInit {

  @Input() itemSelected: TripModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
