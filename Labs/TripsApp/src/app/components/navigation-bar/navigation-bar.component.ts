import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    public auth: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

}
