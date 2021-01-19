import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  User: any = ['Super Admin', 'Author', 'Reader'];

  constructor(
    public authService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

}
