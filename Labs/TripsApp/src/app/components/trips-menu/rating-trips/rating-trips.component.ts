import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-trips',
  templateUrl: './rating-trips.component.html',
  styleUrls: ['./rating-trips.component.css']
})
export class RatingTripsComponent implements OnInit {

  @Output() ratingSelected = new EventEmitter<number>();
  @Input() selectedRating: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  selection() {
    this.ratingSelected.emit(this.selectedRating);
  }
}
