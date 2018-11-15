import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentUserId: string = 'aK89DiZpPMRUvXKZZjNYPsCa3k43'

  constructor(private auth: AuthService) {}

  ngOnInit() {

  }


}
