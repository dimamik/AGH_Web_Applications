import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { ListOfTripsComponent } from './list-of-trips/list-of-trips.component';
import { FormTripComponent } from './form-trip/form-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectedTripsListComponent } from './selected-trips-list/selected-trips-list.component';
import { SelectedSingleTripComponent } from './selected-trips-list/selected-single-trip/selected-single-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTripComponent,
    ListOfTripsComponent,
    FormTripComponent,
    SelectedTripsListComponent,
    SelectedSingleTripComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
