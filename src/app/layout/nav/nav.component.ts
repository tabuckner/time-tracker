import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUserId: string;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    // Get the current user ID from Auth.
  }
}
