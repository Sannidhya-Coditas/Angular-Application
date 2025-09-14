import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() InformAppComp = new EventEmitter();
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
  userloggedin(val: any) {
    console.log('header', val);
    this.InformAppComp.emit(val);
  }

  onLogout() {
    if (this.isLoggedIn) {
      this.auth.logout();
      this.InformAppComp.emit(false);
      this.router.navigate(['/login']);
    }
  }
}
