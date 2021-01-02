import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/post.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient,
  ) {
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.postsUrl}?_sort=views&_order=desc`);
  }

  addPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.postsUrl, post, httpOptions);
  }
}
