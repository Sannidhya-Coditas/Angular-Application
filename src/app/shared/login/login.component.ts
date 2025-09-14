import { Component, EventEmitter, Output } from '@angular/core';
import { users } from '../../constants/usermap';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  @Output() LoggedIn = new EventEmitter();
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {}
  showValues() {
    this.validateuser();
  }
  validateuser() {
    if (users.has(this.email)) {
      if (users.get(this.email) === this.password) {
        this.auth.login();
        this.LoggedIn.emit(true);
        this.router.navigate(['/home']);
      } else {
        alert('incorrect password');
      }
    } else {
      alert('incorrect email');
    }
  }
}
