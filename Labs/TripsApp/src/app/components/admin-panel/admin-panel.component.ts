import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../core/auth.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {

  persistence: string;
  values = ['LOCAL', 'SESSION', 'NONE'];

  constructor(
    public authService: AuthenticationService
  ) {
    authService.getPersistence();
  }

  ngOnInit(): void {
  }

}
