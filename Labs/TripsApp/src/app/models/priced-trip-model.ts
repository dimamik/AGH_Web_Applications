export class PricedTripModel {
  tripKey: string;
  price: number;

  constructor(tripKey: string, price: number) {
    this.tripKey = tripKey;
    this.price = price;
  }
}
