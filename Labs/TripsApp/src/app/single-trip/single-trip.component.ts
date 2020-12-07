import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {


  ngOnInit(): void {
  }


  isAddedAny = false;


  // tslint:disable-next-line:typedef
  deleteClicked($event: MouseEvent) {
    //TODO Clicked delete
  }

  addClicked($event: MouseEvent) {

  }

  deleteTripClicked($event: MouseEvent) {

  }
}
