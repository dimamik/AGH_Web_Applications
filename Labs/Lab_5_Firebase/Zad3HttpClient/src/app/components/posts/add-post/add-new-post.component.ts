import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../../models/post-model';
import {GetPostsService} from '../../../services/posts-service/get-posts.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  titlePost: FormControl;
  bodyPost: FormControl;
  myForm: FormGroup;
  post: PostModel = new PostModel();

  constructor(
    private postsService: GetPostsService
  ) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.myForm = new FormGroup({
      titlePost: this.titlePost,
      bodyPost: this.bodyPost,

    });
  }

  createFormControls() {
    this.titlePost = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$'),
      Validators.minLength(3)
    ]);
    this.bodyPost = new FormControl('', [
      Validators.required,
      Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$'),
      Validators.minLength(3)
    ]);

  }

  extractFromForms(name_of_object: string) {
    return this.myForm.get(name_of_object).value;
  }

  addPost() {
    this.post.title = this.extractFromForms('titlePost');
    this.post.body = this.extractFromForms('bodyPost');
    this.post.id = 0;
    this.post.userId = 0;
    this.postsService.addPost(this.post).subscribe();
    console.log('Sending message to server');
    this.myForm.reset();
  }


}

