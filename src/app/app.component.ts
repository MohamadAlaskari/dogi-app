import { Component } from '@angular/core';
import { LoginService } from './services/authentication/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  post = {
    img: [
      'assets/img/dog/dog_1.jpg',
      'assets/img/dog/dog_2.jpg',
      'assets/img/dog/dog_3.jpg',
      'assets/img/dog/dog_4.jpg',
      'assets/img/dog/dog_5.jpg',
      'assets/img/dog/dog_6.jpg',
      'assets/img/dog/dog_7.jpg',
      'assets/img/dog/dog_8.jpg',
      'assets/img/dog/dog_9.jpg',
      'assets/img/dog/dog_10.jpg',
    ],
    text: [
      'Hallo mein Name ist San, ich freue mich euch kennen zu lernen:)',
      'na heute war ein schönen Tag',
      'morgen habe ich eine überraschung für euch, wartet euch!',
      'ich fahre heute nach Berlin',
      'yummmmmmm,leckeres Essen!',
      'ich fahre heute nach Hamburg',
      'ich habe viel gegessen, ich kann nicht mehr bewegen.',
      'ich fahre heute nach Osnabrück',
      'ich fahre heute nach Oldenbürg',
      'ich fahre heute nach München',
    ],
  };
  constructor(public loginService: LoginService) {}

}
