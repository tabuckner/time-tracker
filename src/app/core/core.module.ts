import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { AuthService } from '.././auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatabaseService } from './database.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    DatabaseService
  ],
})
export class CoreModule { }
