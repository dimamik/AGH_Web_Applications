import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TripModel} from '../../models/trip-model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IsDataInFutureValidator} from './is-data-in-future-validator.directive';
import {GetTripsListService} from '../../services/get-trips-list.service';
import {GetMinMaxPricedTripsService} from '../../services/get-min-max-priced-trips.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  // Form values
  name_of_trip: FormControl;
  country: FormControl;
  data_start: FormControl;
  data_end: FormControl;
  price: FormControl;
  max_places: FormControl;
  description: FormControl;
  myForm: FormGroup;


  @Output() tripAdded = new EventEmitter<TripModel>();

  constructor(
    public minMaxService: GetMinMaxPricedTripsService,
    private tripsService: GetTripsListService
  ) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name_of_trip = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\'\\-,.][^_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$'),
      Validators.minLength(3)
    ]);
    this.country = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$'),
      Validators.minLength(3)
    ]);
    this.data_start = new FormControl('', [
      Validators.required,
      new IsDataInFutureValidator().validate

    ]);
    this.data_end = new FormControl('', [
      Validators.required,
      new IsDataInFutureValidator().validate
    ]);
    this.price = new FormControl('', [
      Validators.required,

    ]);
    this.max_places = new FormControl('', [
      Validators.required,

    ]);
    this.description = new FormControl('', [
      Validators.maxLength(300)
    ]);
  }

  createForm() {
    this.myForm = new FormGroup({
      name_of_trip: this.name_of_trip,
      country: this.country,
      data_start: this.data_start,
      data_end: this.data_end,
      price: this.price,
      max_places: this.max_places,
      description: this.description
    }, {validators: this.endDateAfterOrEqualValidator});
  }


  extractFromForms(name_of_object: string) {
    return this.myForm.get(name_of_object).value;
  }

  addNewTrip() {
    let trip: TripModel = new TripModel(
      this.extractFromForms('name_of_trip'),
      this.extractFromForms('country'),
      this.extractFromForms('data_start'),
      this.extractFromForms('data_end'),
      this.extractFromForms('price'),
      this.extractFromForms('description'),
      this.extractFromForms('max_places')
    );
    let key: string = this.tripsService.createTrip(trip);
    this.myForm.reset();
    this.minMaxService.addNewPrice(key, Number(trip.price));
  }

  endDateAfterOrEqualValidator(formGroup): any {
    let startDateTimestamp, endDateTimestamp;
    for (const controlName in formGroup.controls) {
      if (controlName.indexOf('data_start') !== -1) {
        startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
      }
      if (controlName.indexOf('data_end') !== -1) {
        endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
      }
    }
    return (endDateTimestamp < startDateTimestamp) ? {endDateLessThanStartDate: true} : null;
  }

}
