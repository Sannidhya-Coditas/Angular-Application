import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storedkey = 'Login';
  private loggedIn: any;
  constructor() {
    this.loggedIn = localStorage.getItem(this.storedkey) === 'true';
  }

  login() {
    this.loggedIn = true;
    localStorage.setItem(this.storedkey, 'true');
  }

  logout() {
    this.loggedIn = false;
    localStorage.setItem(this.storedkey, 'false');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
