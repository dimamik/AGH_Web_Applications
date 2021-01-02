import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './modules/app-routing.module';
import {AppComponent} from './app.component';
import {SingleTripComponent} from './components/trips-menu/single-trip/single-trip.component';
import {ListOfTripsComponent} from './components/trips-menu/list-of-trips/list-of-trips.component';
import {AddTripComponent} from './components/add-trip/add-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectedTripsListComponent} from './components/selected-trips/selected-trips-list/selected-trips-list.component';
import {SelectedSingleTripComponent} from './components/selected-trips/selected-single-trip/selected-single-trip.component';
import {DataValidator} from './components/add-trip/data-validator';
import {RatingTripsComponent} from './components/trips-menu/rating-trips/rating-trips.component';
import {FilterPipe} from './components/trips-menu/filter-trips/filter-pipe';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FilterTripsComponent} from './components/trips-menu/filter-trips/filter-trips.component';
import {GetTripsListService} from './services/get-trips-list.service';


@NgModule({
  declarations: [
    AppComponent,
    SingleTripComponent,
    ListOfTripsComponent,
    AddTripComponent,
    SelectedTripsListComponent,
    SelectedSingleTripComponent,
    DataValidator,
    RatingTripsComponent,
    FilterPipe,
    PageNotFoundComponent,
    FilterTripsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [GetTripsListService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}
