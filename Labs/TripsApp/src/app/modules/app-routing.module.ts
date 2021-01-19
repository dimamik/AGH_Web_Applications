import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListOfTripsComponent} from '../components/trips-menu/list-of-trips/list-of-trips.component';
import {SelectedTripsListComponent} from '../components/selected-trips/selected-trips-list/selected-trips-list.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {AddTripComponent} from '../components/add-trip/add-trip.component';
import {TripDetailsComponent} from '../components/trip-details/trip-details.component';
import {RegisterComponent} from '../components/authentication/register/register.component';
import {SignInComponent} from '../components/authentication/sign-in/sign-in.component';
import {AuthGuard} from '../core/guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'signIn', pathMatch: 'full'},
  {path: 'trips', component: ListOfTripsComponent, canActivate: [AuthGuard]},
  {path: 'trips/:key', component: TripDetailsComponent, canActivate: [AuthGuard]},
  {path: 'selected', component: SelectedTripsListComponent, canActivate: [AuthGuard]},
  {path: 'add', component: AddTripComponent, canActivate: [AuthGuard]},
  {path: 'signIn', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
