import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeclockComponent } from './timeclock.component';
import { SharedModule } from '../shared/shared.module';
import { TimeclockTableComponent } from './timeclock-table/timeclock-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TimeclockComponent, TimeclockTableComponent],
  exports: [
    TimeclockComponent
  ]
})
export class TimeclockModule { }
