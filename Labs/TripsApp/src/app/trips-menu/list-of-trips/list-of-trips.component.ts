import {Component, OnInit} from '@angular/core';
import {TripsList} from '../../trips-list-data/trips-list';

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

  getCheapest(){
    let min_price = Infinity
    let index_to_return = 0;
    for (let i=0; i< this.items.length; i++){
      if (min_price >  parseInt(this.items[i].price)){
        min_price = parseInt(this.items[i].price);
        index_to_return = i;
      }
    }
    return index_to_return;
  }

  getHighest(){
    let max_price = - Infinity
    let index_to_return = 0;
    for (let i=0; i< this.items.length; i++){
      if (max_price <  parseInt(this.items[i].price)){
        max_price = parseInt(this.items[i].price);
        index_to_return = i;
      }
    }
    return index_to_return;
  }
}
