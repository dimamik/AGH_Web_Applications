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
import {AdminPanelComponent} from '../components/admin-panel/admin-panel.component';
import {MyProfileComponent} from '../components/my-profile/my-profile.component';
import {ModifyTripComponent} from '../components/modify-trip/modify-trip.component';

const routes: Routes = [

  {path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trips', component: ListOfTripsComponent},
  {path: 'trips/:key', component: TripDetailsComponent, canActivate: [AuthGuard]},
  {path: 'trips/modify/:key', component: ModifyTripComponent, canActivate: [AuthGuard]},
  {path: 'selected', component: SelectedTripsListComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: MyProfileComponent},
  {path: 'add', component: AddTripComponent, canActivate: [AuthGuard]},
  {path: 'signIn', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
