import {Injectable} from '@angular/core';

import {Student} from '../customers/student';
import {AngularFireDatabase} from '@angular/fire/database';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public PATH: string = 'students';

  constructor(private db: AngularFireDatabase) {

  }

  createCustomer(customer: Student): void {
    this.db.list(this.PATH).push(customer);
  }

  updateCustomer(key: string, value: any) {
    this.db.list(this.PATH).update(key, value)
      .catch((ex) => {
        log(ex)
      });
  }

  deleteCustomer(key: string) {
    this.db.list(this.PATH).remove(key)
      .catch((ex) => {
        log(ex)
      });
  }

  getCustomersList() {
    return this.db.list(this.PATH)
      .snapshotChanges();
  }

  deleteAll() {
    this.db.list(this.PATH).remove()
      .catch(ex => {
        log(ex)
      });
  }

}
