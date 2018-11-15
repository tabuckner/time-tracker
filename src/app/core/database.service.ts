import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  collectionName = 'time-clock';
  collection: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore,
    private auth: AuthService) {
    this.auth.getUserIdListener().subscribe(currentUserId => {
      this.collection = this.db.collection(this.collectionName, ref => ref.where('userId', '==', currentUserId));
    });
  }

  addEntry(entry) {
    this.collection.add({...entry});
  }

  getItems(): Observable<any[]> {
    return this.collection.valueChanges();
  }
}
