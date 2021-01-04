import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PhotoModel} from '../../models/photo-model';


@Injectable()
export class GetPhotosService {


  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient
  ) {
  }

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.photosUrl);
  }
}
