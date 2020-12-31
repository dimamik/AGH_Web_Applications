import { Component } from '@angular/core';
import { Marka } from './Car-types/Marka';
import { Model } from './Car-types/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cars';
  markaSelection: number;
  modelSelection: number;
  colorSelection: string;

  marki: Marka[] = [
    {
      name: 'Ihnatsi',
      models: [
        {
          name: 'Model 1',
          colors: [
            'blue',
            'green'
          ]
        },
        {
          name: 'Model 2',
          colors: [
            'light blue',
            'light green'
          ]
        }
      ]
    },
    {
      name: 'Dmitry',
      models: [
        {
          name: 'Model 3',
          colors: [
            'orange',
            'purple'
          ]
        },
        {
          name: 'Model 4',
          colors: [
            'dark orange',
            'dark purple'
          ]
        }
      ]
    }
  ];

  markaSelected(){
    this.modelSelection = null;
    this.colorSelection = null;
  }

  modelSelected() {
    this.colorSelection = null;
  }
}