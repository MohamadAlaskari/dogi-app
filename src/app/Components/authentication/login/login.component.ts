import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  switchToAuthMeldung: boolean = false;
  success_registriert: boolean = false;
  meldung: string = '';

  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}
  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    this.loginService.login(loginData).subscribe(
      (response) => {
        console.log('Erfolgreich eingeloggt:', response);
        this.meldung = 'Login successfull!';
        this.success_registriert = true;
        this.switchToAuthMeldung = true;
        setTimeout(() => {
          this.switchToAuthMeldung = false;
        }, 3000);
        this.loginService.setLoggedIn(this.success_registriert);
        this.router.navigate(['/home']);
      },

      (error) => {
        console.log('Fehler beim Einloggen:', error, error.error.error);
        this.meldung = error.error.error;
        this.success_registriert = false;
        this.switchToAuthMeldung = true;
        setTimeout(() => {
          this.switchToAuthMeldung = false;
        }, 3000);
        this.loginService.setLoggedIn(this.success_registriert);
      }
    );
  }
}
