export class Trip {
  constructor(
    public name: string = '',
    public country: string = '',
    public data_start: string = '',
    public data_end: string = '',
    public price: string = '',
    public max_places: number = 5,
    public link_img: string = 'assets/logo.gif',
    public selected_places: number = 0,
  ) {
  }
}
