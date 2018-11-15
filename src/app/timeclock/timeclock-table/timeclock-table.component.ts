import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

const MOCK_DATA = [
  { 'punchIn': false, 'punchOut': true, 'test': '1:00' },
  { 'punchIn': true, 'punchOut': false, 'test': '2:00' },
  { 'punchIn': false, 'punchOut': true, 'test': '3:00' },
  { 'punchIn': true, 'punchOut': false, 'test': '4:00' },
  { 'punchIn': false, 'punchOut': true, 'test': '5:00' },
  { 'punchIn': true, 'punchOut': false, 'test': '6:00' },
  { 'punchIn': false, 'punchOut': true, 'test': '7:00' },
  { 'punchIn': true, 'punchOut': false, 'test': '8:00' },
  { 'punchIn': false, 'punchOut': true, 'test': '9:00' },
  { 'punchIn': true, 'punchOut': false, 'test': '10:00' },
];

@Component({
  selector: 'app-timeclock-table',
  templateUrl: './timeclock-table.component.html',
  styleUrls: ['./timeclock-table.component.scss']
})
export class TimeclockTableComponent implements OnInit {
  timeData = new MatTableDataSource<any>(MOCK_DATA);
  displayedColumns: string[] = ['punchIn', 'punchOut', 'test'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.timeData.paginator = this.paginator;
    console.log(MOCK_DATA);
  }

  public initTable() {
    this.timeData.paginator = this.paginator;
  }

  public getIcon(value: boolean) {
    if (value) {
      return 'done';
    }
    return 'clear';
  }

  public getIconColorClass(value: boolean) {
    if (value) {
      return 'text--color--success';
    }
    return 'text--color--warn';
  }
}
