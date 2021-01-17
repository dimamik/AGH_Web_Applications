import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  authState$ = false;
  userData: any;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = afAuth.authState;
    console.log(this.userData);
  }

  logOut(){
    this.authState$ = false;
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user);
        this.authState$ = true;
        this.router.navigate(["trips"])
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.authState$ = true;
        this.router.navigate(["trips"]);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
