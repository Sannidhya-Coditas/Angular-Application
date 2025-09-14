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

  constructor(private auth: AuthService) {
    console.log("AppComponent created, loggedin =", this.loggedin);
  }
  get loggedinV1(): boolean {
  return this.auth.isLoggedIn();
}

  loggedin: boolean = false;
  isLoggedIn(val: any) {
    console.log('app', val);
    this.loggedin = val === true;
    console.log(this.loggedin);
  }
}
