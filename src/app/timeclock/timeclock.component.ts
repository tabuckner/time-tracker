import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.scss']
})
export class TimeclockComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  public onPunchIn() {
    console.log(`Clockin In At: ${this.getCurrentTime()}`);
    this.db.collection('test').add({test: this.getCurrentTime(), punchIn: true, punchOut: false});
  }

  public onPunchOut() {
    console.log(`Clockin Out At: ${this.getCurrentTime()}`);
    this.db.collection('test').add({test: this.getCurrentTime(), punchIn: false, punchOut: true});
  }

  public getCurrentTime() {
    return new Date().toISOString();
  }
}
