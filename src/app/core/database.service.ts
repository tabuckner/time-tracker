import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  collectionName = 'time-clock';

  constructor(private db: AngularFirestore) { }

  addEntry(entry) {
    // console.log(entry);
    this.db.collection(this.collectionName)
      .add({...entry});
  }
}
