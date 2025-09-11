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
  useFrontendPagination = true;
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  get showPaginationControls(): boolean {
    // hide if on job-application route
    return this.isLoggedIn && this.router.url !== '/jobapplication';
  }

  ToshowLoginComp() {
    return this.isLoggedIn || this.router.url === '/login';
  }
  // isAlredyLoggedIn() {
  //   return this.auth.isLoggedIn();
  // }
  isLoginPageorHomePage(): boolean {
    return this.router.url === '/login' || this.router.url === '/home';
  }
  // isloggedin() {
  //   if (this.auth.isLoggedIn()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  Logout() {
    if (this.isLoggedIn) {
      this.auth.logout();
      this.router.navigate(['/login']);
    }
  }
}
