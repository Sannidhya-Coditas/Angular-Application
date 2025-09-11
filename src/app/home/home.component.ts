import { Component } from '@angular/core';
import { AuthService } from '../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}
  isloggedin() {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  Logout() {
    if (this.auth.isLoggedIn()) {
      this.auth.logout();
      this.router.navigate(['/login']);
    }
  }
}
