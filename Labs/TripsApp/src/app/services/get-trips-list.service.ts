import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {TripModel} from '../models/trip-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTripsListService {

  daneRef = this.db.collection('tripList');

  constructor(private db: AngularFirestore) {
  }

  updateTrip(key: string, value: any) {
    this.daneRef.doc(key).update({...value}).catch(ex => {
      console.log(ex);
    });
  }

  createTrip(trip: TripModel): string {
    this.daneRef.add({...trip})
      .then(function(docRef) {
        trip.key = docRef.id;
        console.log('Trip created with ID: ', docRef.id);
      })
      .then(() => {
        this.updateTrip(trip.key, trip);
      })
      .catch(function(error) {
        console.error('Error adding trip: ', error);
      });
    return trip.key;
  }

  deleteTrip(key: string) {
    this.daneRef.doc(key).delete().catch(ex => {
      console.log(ex);
    });
  }

  getTripsList(): Observable<any[]> {
    return this.db.collection('tripList').valueChanges();
  }

  deleteAll() {
    this.db.collection('tripList').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.db.collection('tripList').doc(doc.id).delete().catch(ex => {
          console.log(ex);
        });
        console.log(doc.id, ' => ', doc.data());
      });
    });
  }


}
