import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Trip} from '../trips-list-data/trip';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataValidator} from './data-validator';

@Component({
  selector: 'app-form-trip',
  templateUrl: './form-trip.component.html',
  styleUrls: ['./form-trip.component.css']
})
export class FormTripComponent implements OnInit {

  name_of_trip: FormControl;
  country: FormControl;
  data_start: FormControl;
  data_end: FormControl;
  price: FormControl;
  max_places: FormControl;
  description: FormControl;
  myForm: FormGroup;
  tripToAdd: Trip;

  @Output() tripAdded = new EventEmitter<Trip>();

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  constructor() {
  }

  createFormControls() {
    this.name_of_trip = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$'),
      Validators.minLength(3)
    ]);
    this.country = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$'),
      Validators.minLength(3)
    ]);
    this.data_start = new FormControl('', [
      Validators.required,
      // TODO ADD Data Validator
      new DataValidator().validate

    ]);
    this.data_end = new FormControl('', [
      Validators.required
    ]);
    this.price = new FormControl('', [
      Validators.required,

    ]);
    this.max_places = new FormControl('', [
      Validators.required,

    ]);
    this.description = new FormControl('', [
      Validators.maxLength(30)
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
    });
  }


  extractFromForms(name_of_object: string) {
    return this.myForm.get(name_of_object).value;
  }

  addNewTrip() {
    this.tripToAdd = new Trip(
      this.extractFromForms('name_of_trip'),
      this.extractFromForms('country'),
      this.extractFromForms('data_start'),
      this.extractFromForms('data_end'),
      this.extractFromForms('price'),
      this.extractFromForms('description'),
      this.extractFromForms('max_places')
    );
    this.tripAdded.emit(this.tripToAdd);
    this.myForm.reset();
  }
}
