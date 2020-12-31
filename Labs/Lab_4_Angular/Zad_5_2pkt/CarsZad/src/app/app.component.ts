import { Mark } from './ICars/Mark';
import { Component } from '@angular/core';
import { Model } from './ICars/Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarsZad';
  MarkChoosen: number;
  ModelChoosen: number;
  ColorChoosen: number;
  Cars = [
    {
      name: "Opel",
      models: [
        {
          name: "opel-turbo",
          color: ["Yellow", "Green"]
        },
        {
          name: "opel-nitro",
          color: ["red", "casual-blue"]
        }
      ]
    },
    {
      name: "Nissan",
      models: [
        {
          name: "nissan-turbo",
          color: ["Black", "Pink"]
        },
        {
          name: "nissan-nitro",
          color: ["Purple", "casual-purple"]
        }
      ]
    },
    {
      name: "Lamborgini",
      models: [
        {
          name: "Lamborgini-turbo",
          color: ["Gold", "Diamond-white"]
        },
        {
          name: "Lamborgini-nitro",
          color: ["red", "blue"]
        }
      ]
    }
  ]

}

