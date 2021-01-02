import {Injectable} from '@angular/core';
import {TripModel} from '../models/trip-model';
import {PricedTripModel} from '../models/priced-trip-model';

@Injectable({
  providedIn: 'root'
})
export class GetMinMaxPricedTripsService {
  public arrayOfPrices: PricedTripModel[] = [];
  public tripsList: TripModel[] = [];
  public minPrice: number;
  public minKey: string;
  public maxPrice: number;
  public maxKey: string;

  constructor() {

  }

  createArray(tripsList) {
    this.arrayOfPrices = [];
    for (let i = 0; i < tripsList.length; i++) {
      this.arrayOfPrices.push(
        new PricedTripModel(tripsList[i].key, Number(tripsList[i].price))
      );
    }
    this.updateValues();
  }


  /**
   * Adds new element to price
   */
  public addNewPrice(keyOfElement: string, price: number) {
    this.arrayOfPrices.push(new PricedTripModel(keyOfElement, price));
    this.updateValues();
  }

  public removePrice(keyOfElement: string) {
    this.arrayOfPrices = this.arrayOfPrices.filter((element) =>
      element.tripKey != keyOfElement
    );
    this.updateValues();
  }

  public updateValues() {
    let min_price = Infinity;
    let min_key: string;
    let max_price = -Infinity;
    let max_key: string;

    for (let element of this.arrayOfPrices) {
      if (element.price >= max_price) {
        max_price = element.price;
        max_key = element.tripKey;
      }
      if (element.price <= min_price) {
        min_price = element.price;
        min_key = element.tripKey;
      }
    }
    this.maxKey = max_key;
    this.minKey = min_key;
  }

}

