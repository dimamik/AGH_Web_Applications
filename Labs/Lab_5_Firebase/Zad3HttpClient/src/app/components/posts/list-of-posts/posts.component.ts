import {Component, OnInit} from '@angular/core';
import {GetPostsService} from '../../../services/posts-service/get-posts.service';
import {PostModel} from '../../../models/post-model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: PostModel[];

  constructor(
    private postsService: GetPostsService,
  ) {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngOnInit() {
  }


}
