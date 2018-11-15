import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TimeclockModule } from './timeclock/timeclock.module';
import { LayoutModule } from './layout/layout.module';
// import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    TimeclockModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
