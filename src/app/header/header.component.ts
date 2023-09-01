import { Component } from '@angular/core';
import { LoginService } from '../services/authentication/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: String = 'DOGI';
  constructor(private loginService: LoginService, private router: Router) {}
  logout_handle() {
    this.loginService.setLoggedIn(false);
    this.router.navigate(['auth/login']);
  }
}
