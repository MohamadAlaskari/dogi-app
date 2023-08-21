import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent {
  profile_rows = {
    img: [
      'assets/img/dog/dog_11.jpg',
      'assets/img/dog/dog_12.jpg',
      'assets/img/dog/dog_13.jpg',
      'assets/img/dog/dog_14.jpg',
      'assets/img/dog/dog_15.jpg',
    ],
    name: ['Moric', 'Laviv', 'Janu', 'Kermein', 'WiKi'],
    discription: [
      '3 Jahre alt',
      '1 Jahre alt',
      '7 Jahre alt',
      '2 Jahre alt',
      '6 Jahre alt',
    ],
  };
}
