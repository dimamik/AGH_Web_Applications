import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {RoleModel} from '../models/roles/role-model';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessService {

  userAccessModel: RoleModel = new RoleModel();
  userAccessRole: string;

  constructor(
    public afs: AngularFirestore
  ) {

  }

  // roleModelConverter = {
  //   toFirestore: (role) => {
  //     return {
  //       add_trip: role.add_trip;
  //       modify_trip: role.modify_trip;
  //       read_archived: role.read_archived;
  //       read_available: role.read_available;
  //       read_unavailable: role.read_unavailable;
  //       delete_trip: role.delete_trip;
  //
  //     };
  //   },
  //   fromFirestore: (snapshot, options) => {
  //     const data = snapshot.data(options);
  //     return new RoleModel(data.add_trip, data.modify_trip, data.read_archived,data.read_available,
  //       data.read_unavailable,data.delete_trip
  //       );
  //   }
  // };

  convertUserRoleToParameters(userParams: string) {
    if (userParams == null) {
      return null;
    }
    //TODO Not writing the value and shouts errors
    this.userAccessRole = userParams;

    this.afs.collection('USER_ROLES')
      .get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == userParams) {
          console.log(doc.data());
          for (var par in this.userAccessModel) {
            this.userAccessModel[par] = doc.get(par);
          }
          console.log(doc.get('role'));
        }


      });
    })
      .add(
        () => {
          console.log('No such data from role-access');
        }
      );
  }

}
