import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/auth.service';
import {RoleAccessService} from '../../core/role-access.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(
    public auth: AuthenticationService,
    public roleAccess: RoleAccessService
  ) {
  }

  ngOnInit(): void {
  }

}
