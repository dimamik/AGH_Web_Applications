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
import {IsDataInFutureValidator} from './components/add-trip/is-data-in-future-validator.directive';
import {RatingTripsComponent} from './components/trips-menu/rating-trips/rating-trips.component';
import {FilterPipe} from './components/trips-menu/filter-trips/filter-pipe';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FilterTripsComponent} from './components/trips-menu/filter-trips/filter-trips.component';
import {GetTripsListService} from './services/get-trips-list.service';
import {TripDetailsComponent} from './components/trip-details/trip-details.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './material/material.module';
import {SignInComponent} from './components/authentication/sign-in/sign-in.component';
import {RegisterComponent} from './components/authentication/register/register.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SingleTripComponent,
    ListOfTripsComponent,
    AddTripComponent,
    SelectedTripsListComponent,
    SelectedSingleTripComponent,
    IsDataInFutureValidator,
    RatingTripsComponent,
    FilterPipe,
    PageNotFoundComponent,
    FilterTripsComponent,
    TripDetailsComponent,
    NavigationBarComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [GetTripsListService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}
