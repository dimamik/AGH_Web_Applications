import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListOfTripsComponent} from '../components/trips-menu/list-of-trips/list-of-trips.component';
import {SelectedTripsListComponent} from '../components/selected-trips/selected-trips-list/selected-trips-list.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {AddTripComponent} from '../components/add-trip/add-trip.component';

const routes: Routes = [
  {path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trips', component: ListOfTripsComponent},
  {path: 'selected', component: SelectedTripsListComponent},
  {path: 'add', component: AddTripComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
