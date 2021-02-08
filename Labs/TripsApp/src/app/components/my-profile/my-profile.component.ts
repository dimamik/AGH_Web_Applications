import {Component, OnInit} from '@angular/core';
import {RoleAccessService} from '../../core/role-access.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(public roleAccess: RoleAccessService) {

  }

  ngOnInit(): void {
  }

}

