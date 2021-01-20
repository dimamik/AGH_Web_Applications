import {Component, OnInit} from '@angular/core';
import firebase from 'firebase';
import {AuthenticationService} from '../../core/auth.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) {
    authService.getPersistence();
  }

  persistence: string;

  ngOnInit(): void {
  }

  values = ['LOCAL', 'SESSION', 'NONE'];

}
