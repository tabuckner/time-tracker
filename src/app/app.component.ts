import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracker';
  testDb;

  constructor(private db: AngularFirestore,
              public auth: AuthService) {
    this.auth.anonymousLogin().then(() => {console.log('test')});
    this.testDb = db.collection('test').valueChanges();
  }
}
