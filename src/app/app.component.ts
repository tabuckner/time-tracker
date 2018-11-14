import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracker';
  testDb;

  constructor(db: AngularFirestore) {
    this.testDb = db.collection('test').valueChanges();
  }
}
