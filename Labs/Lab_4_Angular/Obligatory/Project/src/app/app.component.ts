import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  imie = 'AktorName';
  titleFilm:string;
  nazwisko = 'AktorSurname'
  a:number = 2 + 3;
}
