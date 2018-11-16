import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {
  userId: string;
  userIdUpdated = new Subject<string>();

  constructor(private afAuth: AngularFireAuth) {
  }

  public setUserId(id: string) {
    this.userId = id;
    console.log(this.userId);
  }

  public getUserId(): string {
    return this.userId;
  }

  public getUserIdListener(): Observable<string> {
    return this.userIdUpdated.asObservable();
  }

  public anonymousLogin() {
    return new Promise((res, rej) => {
      this.afAuth.auth.signInAnonymously()
        .then((a) => {
          this.anonymousLoginHandler(a);
          res();
        })
        .catch((e) => {
          console.error(e);
          rej(e);
        });
    });
  }

  public anonymousLoginHandler(a) {
    this.setUserId(a.user.uid);
    this.userIdUpdated.next(this.getUserId());
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      // this.router.navigate(['/']);
    });
  }
}
