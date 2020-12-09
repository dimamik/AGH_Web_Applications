import {Component, Input, OnInit} from '@angular/core';
import {Trip} from '../../trips-list-data/trip';

@Component({
  selector: 'app-selected-single-trip',
  templateUrl: './selected-single-trip.component.html',
  styleUrls: ['./selected-single-trip.component.css']
})
export class SelectedSingleTripComponent implements OnInit {

  constructor() { }
  @Input() itemSelected: Trip;
  ngOnInit(): void {
  }

}
