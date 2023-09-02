import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn: boolean = false;
  constructor(private http: HttpClient) {}

  login(login_data: any) {
    return this.http.post('http://localhost:3007/users/login', login_data);
  }

  setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }

  getLoggedIn() {
    return this.isLoggedIn;
  }
}
