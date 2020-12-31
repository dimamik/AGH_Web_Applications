import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SingleTripComponent} from './trips-menu/single-trip/single-trip.component';
import {ListOfTripsComponent} from './trips-menu/list-of-trips/list-of-trips.component';
import {FormTripComponent} from './form-trip/form-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectedTripsListComponent} from './selected-trips/selected-trips-list/selected-trips-list.component';
import {SelectedSingleTripComponent} from './selected-trips/selected-single-trip/selected-single-trip.component';
import {DataValidator} from './form-trip/data-validator';
import { RatingTripsComponent } from './trips-menu/rating-trips/rating-trips.component';
import {FilterPipe} from './trips-menu/list-of-trips/filter-pipe';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    SingleTripComponent,
    ListOfTripsComponent,
    FormTripComponent,
    SelectedTripsListComponent,
    SelectedSingleTripComponent,
    DataValidator,
    RatingTripsComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}
