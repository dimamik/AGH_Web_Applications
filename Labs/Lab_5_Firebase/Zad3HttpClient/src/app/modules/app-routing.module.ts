import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {PostsComponent} from '../components/posts/list-of-posts/posts.component';
import {PhotosComponent} from '../components/photos/photos.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
