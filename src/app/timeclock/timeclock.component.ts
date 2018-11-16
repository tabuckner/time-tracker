import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../core/database.service';

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.scss']
})
export class TimeclockComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  public onPunchIn() {
    const newEntry = {
      punchIn: true,
      punchOut: false,
      time: this.getCurrentTime()
    };
    this.db.addEntry(newEntry);
  }

  public onPunchOut() {
    const newEntry = {
      punchIn: false,
      punchOut: true,
      time: this.getCurrentTime()
    };
    this.db.addEntry(newEntry);
  }

  public getCurrentTime(): string {
    return new Date().toISOString();
  }
}
