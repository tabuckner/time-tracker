import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

import { auth, } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of , Subject} from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {
  userId: string;
  userIdUpdated = new Subject<string>();
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    // this.user = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
  }

  public setUserId(id: string) {
    this.userId = id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getUserIdListener(): Observable<string> {
    return this.userIdUpdated.asObservable();
  }

  public anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then(a => this.anonymousLoginHandler(a))
      .catch((e) => { console.error(e); });
  }

  public anonymousLoginHandler(a: auth.UserCredential) {
    this.setUserId(a.user.uid);
    this.userIdUpdated.next(this.getUserId());
  }

  public googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      // this.router.navigate(['/']);
    });
  }
}
