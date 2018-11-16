import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public currentUserId = 'No User Id';
  public subs = new Subscription();

  constructor(private auth: AuthService,
              private cd: ChangeDetectorRef) { }

  public ngOnInit() {
    this.subs.add(
      this.auth.getUserIdListener().subscribe((newUserId) => {
        this.currentUserId = newUserId;
        this.cd.detectChanges();
      })
    );
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
