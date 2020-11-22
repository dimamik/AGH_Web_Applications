import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListGetterService {

  userInfo = {
    name: "Dima",
    age: 10,
    surname: null
  }
  constructor() {
    
   }
  getInfo(){
    return this.userInfo;
  }
}
