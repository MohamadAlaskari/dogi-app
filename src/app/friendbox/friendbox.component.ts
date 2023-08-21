import { Component } from '@angular/core';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrls: ['./friendbox.component.scss'],
})
export class FriendboxComponent {
  names = [
    'Lumin',
    'Raki',
    'Zuna',
    'Liekma',
    'Quat',
    'Jena',
    'Nuta',
    'Macklin',
    'Vieto',
    'Xcien',
  ];

  imges = [
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
  ];
}
