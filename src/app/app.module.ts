import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TimeclockComponent } from './timeclock/timeclock.component';
import { MatButtonModule } from '@angular/material';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
// import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TimeclockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    // Router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
