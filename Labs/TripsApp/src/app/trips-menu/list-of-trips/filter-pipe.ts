import {Pipe, PipeTransform} from '@angular/core';
import {Trip} from '../../trips-list-data/trip';

/**
 * FilterPipe to handle filtering date in list-of-trips
 */
@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {
  transform(trips: Trip[], searchCountry: string,price_start:number,price_end:number,data_start:Date,data_end:Date, rating:number): Trip[] {
    if (!trips)
      return [];
    if (searchCountry){
      searchCountry = searchCountry.toLowerCase();
      trips =  trips.filter(trip => {
        return trip.country.toLowerCase().includes(searchCountry);
      });
    }
    if (price_start != undefined){
      trips =  trips.filter(trip => {
        return parseInt(trip.price)>=price_start;
      });
    }
    if (rating != undefined){
      trips =  trips.filter(trip => {
        return trip.rating >=rating;
      });
    }
    if (price_end != undefined){
      trips =  trips.filter(trip => {
        return parseInt(trip.price)<=price_end;
      });
    }
    if (data_start != undefined){

      trips = trips.filter(trip => {
        let date_having_start = new Date(trip.data_start);
        date_having_start.setHours(0, 0, 0, 0);
        let data_should_be = new Date(data_start);
        data_should_be.setHours(0, 0, 0, 0);
        return date_having_start>=data_should_be;
      });
    }
    if (data_end != undefined){
      trips = trips.filter(trip => {
        let date_having_end = new Date(trip.data_end);
        date_having_end.setHours(0, 0, 0, 0);
        let data_should_be = new Date(data_end);
        data_should_be.setHours(0, 0, 0, 0);
        return date_having_end<=data_should_be;
      });
    }
    return trips;
  }
}
