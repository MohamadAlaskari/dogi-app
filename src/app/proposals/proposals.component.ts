import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent {
  profile_rows = {
    images: [
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
      'assets/img/dog/dog_11.jpg',
      'assets/img/dog/dog_12.jpg',
      'assets/img/dog/dog_13.jpg',
      'assets/img/dog/dog_14.jpg',
      'assets/img/dog/dog_15.jpg',
    ],
    names: [
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
      'Moric',
      'Laviv',
      'Janu',
      'Kermein',
      'WiKi',
    ],

    discriptions: [
      '3 Jahre alt',
      '1 Jahre alt',
      '7 Jahre alt',
      '2 Jahre alt',
      '6 Jahre alt',
      '3 Jahre alt',
      '5 Jahre alt',
      '2 Jahre alt',
      '8 Jahre alt',
      '9 Jahre alt',
      '11 Jahre alt',
      '3 Jahre alt',
      '5 Jahre alt',
      '7 Jahre alt',
      '1 Jahre alt',
    ],
  };
}
