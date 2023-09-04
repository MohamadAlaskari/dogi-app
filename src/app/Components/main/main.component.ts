import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public loginService: LoginService, router: Router) {
    loginService.getLoggedIn()
      ? router.navigate(['/home'])
      : router.navigate(['/login']);
  }
}
