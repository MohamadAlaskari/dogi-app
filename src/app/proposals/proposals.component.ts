import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent {
  profile_rows = {
    img: [
      'assets/img/hamster/hamster_6.jpg',
      'assets/img/hamster/hamster_7.jpg',
      'assets/img/hamster/hamster_8.jpg',
      'assets/img/hamster/hamster_9.jpg',
      'assets/img/hamster/hamster_10.jpg',
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
