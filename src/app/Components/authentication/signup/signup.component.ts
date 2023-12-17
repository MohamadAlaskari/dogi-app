import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/authentication/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  switchToAuthMeldung: boolean = false;
  success_registriert: boolean = false;
  meldung: string = '';
  username = '';
  email = '';
  password = '';

  constructor(private signupService: SignupService, private router: Router) {}
  onSubmit() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.signupService.signup(userData).subscribe(
      (response) => {
        // Hier könntest du den Benutzer zu einer anderen Seite umleiten oder eine Erfolgsmeldung anzeigen.

        console.log('Registration successful', response);
        this.switchToAuthMeldung = true;
        this.success_registriert = true;
        this.meldung = 'User registered successfully!';
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
      },
      (error) => {
        console.error('Registration failed', error.error);
        this.meldung = error.error.error;
        this.switchToAuthMeldung = true;
        this.success_registriert = false;
        setTimeout(() => {
          this.switchToAuthMeldung = false;
        }, 3000);
      }
    );
  }
}
