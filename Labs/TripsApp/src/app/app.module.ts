import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { ListOfTripsComponent } from './list-of-trips/list-of-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTripComponent,
    ListOfTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
