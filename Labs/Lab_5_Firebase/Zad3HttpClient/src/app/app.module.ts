import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './modules/app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/list-of-posts/posts.component';
import {PhotosComponent} from './components/photos/photos.component';
import {GetPhotosService} from './services/photos-service/get-photos.service';
import {HttpClientModule} from '@angular/common/http';
import {GetPostsService} from './services/posts-service/get-posts.service';
import {AddNewPostComponent} from './components/posts/add-post/add-new-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PhotosComponent,
    AddNewPostComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GetPhotosService,
    GetPostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
