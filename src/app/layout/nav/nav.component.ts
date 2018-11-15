import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  currentUserId: string;
  public subs = new Subscription();

  constructor(private auth: AuthService) { }

  public ngOnInit() {
    this.subs.add(
      this.auth.getUserIdListener().subscribe((newUserId) => {
        this.currentUserId = newUserId;
      })
    );
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
