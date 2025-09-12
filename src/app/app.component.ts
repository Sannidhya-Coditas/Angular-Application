import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'loginapp';

  constructor(private auth: AuthService) {}
  isLoggedIn = this.auth.isLoggedIn() == true ? true : false;
}
