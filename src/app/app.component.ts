import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  post = {
    img: [
      'assets/img/hamster/hamster_1.jpg',
      'assets/img/hamster/hamster_2.jpg',
      'assets/img/hamster/hamster_3.jpg',
      'assets/img/hamster/hamster_4.jpg',
      'assets/img/hamster/hamster_5.jpg',
      'assets/img/hamster/hamster_6.jpg',
      'assets/img/hamster/hamster_7.jpg',
      'assets/img/hamster/hamster_8.jpg',
      'assets/img/hamster/hamster_9.jpg',
      'assets/img/hamster/hamster_10.jpg',
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
}
