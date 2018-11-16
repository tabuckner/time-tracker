import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DatabaseService } from '../../core/database.service';
import { Subscription } from 'rxjs';

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
export class TimeclockTableComponent implements OnInit, OnDestroy {
  timeData: MatTableDataSource<any>;
  displayedColumns: string[] = ['punchIn', 'punchOut', 'test'];
  subs = new Subscription();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.setTableData(this.db.getTimePunches());
    this.subs.add(
      this.db.getTimePunchesListener().subscribe((updatedTimePunches) => {
        this.setTableData(updatedTimePunches);
      })
    );
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public setTableData(data: any[]) {
    this.timeData = new MatTableDataSource<any>(data);
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
