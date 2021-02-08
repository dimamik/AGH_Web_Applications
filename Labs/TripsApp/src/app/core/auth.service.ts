import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {RoleAccessService} from './role-access.service';
import User = firebase.User;
import auth = firebase.auth;


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  user$: Observable<User>;
  userRole: string;
  userDetails = null;
  daneRef = this.afs.collection('USER_ID_ROLES');
  persistence = auth.Auth.Persistence.LOCAL;


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
        this.getUserRole();

      } else {
        this.userDetails = null;
        this.getUserRole();
      }
    });
    console.log(this.user$);
    this.getPersistence();
  }

  get authenticated(): boolean {
    return this.userDetails != null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.userDetails.uid : '';
  }

  getPersistence() {
    this.afs.collection('configuration').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        if (doc.data()['type'] == 'LOCAL') {
          this.persistence = auth.Auth.Persistence.LOCAL;
        }

        if (doc.data()['type'] == 'SESSION') {
          this.persistence = auth.Auth.Persistence.SESSION;
        }

        if (doc.data()['type'] == 'NONE') {
          this.persistence = auth.Auth.Persistence.NONE;
        }
      });

    });
  }

  setPersistence() {
    this.afs.collection('configuration').doc('session').set({
      type: this.persistence
    }).then(
      () =>
        console.log('setPersistence successfully added')
    )
      .catch(
        (ex) =>
          console.log('setPersistence successfully added')
      );
  }

  logOut() {
    this.afAuth.signOut()
      .then(
        () =>
          this.roleAccess.logOutUser()
      )
    ;
  }

  public getUserRole() {
    if (this.currentUserId == '') {
      return;
    }
    this.afs.collection('USER_ID_ROLES').get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == this.currentUserId) {
          console.log(doc.data());
          this.userRole = doc.data()['role'];
          this.roleAccess.convertUserRoleToParameters(this.userRole);
        }

      });
    })
      .add(
        () => {
          console.log('No such data');
        }
      );

  }

  addUserWithRoleToFireBase(currentUserId: string, role: string = 'reader') {
    if (currentUserId == '') {
      return;
    }
    this.afs.collection('USER_ID_ROLES').doc(currentUserId).set({
      role: role
    }).then(
      () =>
        console.log('Data successfully added')
    );
  }

  signUp(email, password) {
    this.afAuth.setPersistence(this.persistence).then(() => {
      // Now sign-in using your chosen method.
      this.SignUp(email, password);
      return this.afAuth.signInAnonymously();
    }).catch((error) => {
      // Handle errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  }

  signIn(email, password) {
    this.afAuth.setPersistence(this.persistence).then(() => {
      // Now sign-in using your chosen method.
      this.SignIn(email, password);
      return this.afAuth.signInAnonymously();
    }).catch((error) => {
      // Handle errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
  }

  // Sign up with email/password
  private SignUp(email, password) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
        this.addUserWithRoleToFireBase(result.user.uid);
        this.getUserRole();
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
  private SignIn(email, password) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(this.user$);
        this.getUserRole();
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
