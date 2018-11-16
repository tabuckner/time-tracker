import { Injectable, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, Subscription, Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class DatabaseService implements OnDestroy {
  collectionName = environment.firebaseCollectionName;
  collection: AngularFirestoreCollection<any>;
  timePunches: any[] = []; // TODO: Type this.
  timePunchesListener = new Subject();
  subs = new Subscription();

  constructor(
    private db: AngularFirestore,
    private auth: AuthService
  ) {
    this.setupCollection();
    this.setupDatabaseListener();
  }

  public setupCollection() {
    const authUserId = this.auth.getUserId();
    if (authUserId) {
      this.collection = this.db.collection(this.collectionName, ref => ref.where('userId', '==', authUserId));
    } else {
      console.error('UserID is not defined in auth.service.ts');
    }
  }

  public setupDatabaseListener() {
    if (this.collection) {
      this.subs.add(
        this.collection.valueChanges().subscribe((updatedData) => {
          this.timePunches = updatedData;
          this.updateTimePunchListeners();
        })
      );
    }
  }

  addEntry(entry: {userId?: string, punchIn: boolean, punchOut: boolean, time: string}) {
    const authUserId = this.auth.getUserId();
    if (!authUserId) {
      return;
    }
    entry.userId = authUserId;
    this.collection.add({ ...entry });
  }

  getTimePunchesListener(): Observable<any> {
    return this.timePunchesListener.asObservable();
  }

  updateTimePunchListeners() {
    this.timePunchesListener.next([...this.timePunches]);
  }

  getTimePunches() {
    return [...this.timePunches];
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
