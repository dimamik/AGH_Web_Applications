import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {RoleAccessService} from './role-access.service';
import User = firebase.User;


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  user$: Observable<User>;
  userRole: string;
  userDetails: any;
  daneRef = this.afs.collection('USER_ID_ROLES');

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private roleAccess: RoleAccessService
  ) {

    this.user$ = afAuth.authState;
    this.user$.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        this.roleAccess.convertUserRoleToParameters(this.getUserRole());
      } else {
        this.userDetails = null;
        this.roleAccess.convertUserRoleToParameters(this.getUserRole());
      }
    });
    console.log(this.user$);
  }


  get authenticated(): boolean {
    return this.userDetails != null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.userDetails.uid : '';
  }

  logOut() {
    this.user$ = null;
  }

  public getUserRole() {
    if (this.currentUserId == '') {
      return null;
    }
    this.afs.collection('USER_ID_ROLES').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == this.currentUserId) {
          console.log(doc.data());
          this.userRole = doc.data()['role'];
        }

      });
    })
      .add(
        () => {
          console.log('No such data');
        }
      );
  }

  addUserWithRoleToFireBase(currentUserId: string) {
    if (currentUserId == '') {
      return;
    }
    this.afs.collection('USER_ID_ROLES').doc(currentUserId).set({
      role: 'reader'
    }).then(
      () =>
        console.log('Data successfully added')
    );
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
        this.addUserWithRoleToFireBase(result.user.uid);
        this.getUserRole();
        this.roleAccess.convertUserRoleToParameters(this.userRole);
        this.router.navigate(['trips']).catch(
          (er) => {
            console.log(er);
          }
        );

      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(this.user$);
        this.getUserRole();
        this.roleAccess.convertUserRoleToParameters(this.userRole);
        this.router.navigate(['trips']).catch(
          (er) => {
            console.log(er);
          }
        );
      }).catch((error) => {
        window.alert(error.message);
      });
  }

}
