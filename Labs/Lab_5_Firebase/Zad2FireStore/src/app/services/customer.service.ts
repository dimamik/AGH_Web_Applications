import {Injectable} from '@angular/core';

import {Student} from '../customers/student';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  daneRef = this.db.collection('students');

  constructor(private db: AngularFirestore) {
  }

  updateCustomer(key: string, value: any) {
    this.daneRef.doc(key).update({...value}).catch(ex => {
      log(ex)
    });
  }

  createCustomer(customer: Student): void {
    this.daneRef.add({...customer})
      .then(function (docRef) {
        customer.key = docRef.id;
        console.log('Customer created with ID: ', docRef.id);
      })
      .then(() => {
        this.updateCustomer(customer.key, customer);
      })
      .catch(function (error) {
        console.error('Error adding Customer: ', error);
      });
  }


  deleteCustomer(key: string) {
    this.daneRef.doc(key).delete().catch(ex => {
      log(ex)
    });
  }

  getCustomersList(): Observable<any[]> {
    return this.db.collection('students').valueChanges();
  }

  deleteAll() {
    this.db.collection('students').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.db.collection('students').doc(doc.id).delete().catch(ex => {
          log(ex)
        });
        console.log(doc.id, ' => ', doc.data());
      });
    });
  }
}
