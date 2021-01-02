export class TripModel {
  name: string = '';
  country: string = '';
  data_start: string = '';
  data_end: string = '';
  price: string = '';
  description: string = '';
  max_places: number = 5;
  link_img: string = 'assets/logo.gif';
  selected_places: number = 0;
  rating: number = 1;
  key?: string;


  constructor(name: string, country: string, data_start: string, data_end: string, price: string, description: string, max_places: number) {
    this.name = name;
    this.country = country;
    this.data_start = data_start;
    this.data_end = data_end;
    this.price = price;
    this.description = description;
    this.max_places = max_places;
  }
}
