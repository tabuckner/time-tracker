import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;
  title = 'time-tracker';

  constructor(public auth: AuthService) { }

  public ngOnInit() {
    this.auth.anonymousLogin()
      .then(() => {
        this.loading = false;
      });
  }
}
