import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.scss']
})
export class TimeclockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onPunchIn() {
    console.log(`Clockin In At: ${this.getCurrentTime()}`);
  }

  public onPunchOut() {
    console.log(`Clockin Out At: ${this.getCurrentTime()}`);
  }

  public getCurrentTime() {
    return new Date().toISOString();
  }
}
