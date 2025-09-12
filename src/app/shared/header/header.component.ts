import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  get showPaginationControls(): boolean {
    // hide if on job-application route
    return this.isLoggedIn && this.router.url !== '/jobapplication';
  }

  ToshowLoginComp() {
    //return this.isLoggedIn || this.router.url === '/login';
  }
  isLoginPageorHomePage(): boolean {
    return this.router.url === '/login' || this.router.url === '/home';
  }

  onLogout() {
    if (this.isLoggedIn) {
      this.auth.logout();
      //this.router.navigate(['/login']);
    }
  }
}
