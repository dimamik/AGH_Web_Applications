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

  convertUserRoleToParameters(userParams: string) {
    if (userParams == null) {
      return null;
    }
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
    });
  }

  logOutUser() {
    this.userAccessRole = null;
    this.userAccessModel = new RoleModel();
  }
}
