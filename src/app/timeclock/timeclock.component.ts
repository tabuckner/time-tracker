import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../core/database.service';
import { TimePunch } from '../core/models/time-punch.class';

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.scss']
})
export class TimeclockComponent implements OnInit {

  constructor(private db: DatabaseService) {}

  ngOnInit() {
  }

  public onPunchIn() {
    console.log(`Clockin In At: ${this.getCurrentTime()}`);
    const newEntry = new TimePunch({ userId: 'testUserIdString', punchIn: true, punchOut: false, time: this.getCurrentTime() });
    this.db.addEntry(newEntry);
  }

  public onPunchOut() {
    console.log(`Clockin Out At: ${this.getCurrentTime()}`);
    const newEntry = new TimePunch({ userId: 'testUserIdString', punchIn: false, punchOut: true, time: this.getCurrentTime() });
    this.db.addEntry(newEntry);
  }

  public getCurrentTime(): string {
    return new Date().toISOString();
  }
}
