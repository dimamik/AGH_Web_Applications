import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireManipulatorService {

  constructor(
    public fireStore: AngularFirestore
  ) {
  }

  getObjectUnderPath(collection: string, document: string) {

  }

}
