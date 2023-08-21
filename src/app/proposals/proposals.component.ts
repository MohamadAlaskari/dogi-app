import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent {
  profile_rows = {
    imges: [
      'assets/img/dog/dog_11.jpg',
      'assets/img/dog/dog_12.jpg',
      'assets/img/dog/dog_13.jpg',
      'assets/img/dog/dog_14.jpg',
      'assets/img/dog/dog_15.jpg',
    ],
    names: ['Moric', 'Laviv', 'Janu', 'Kermein', 'WiKi'],
    discriptions: [
      '3 Jahre alt',
      '1 Jahre alt',
      '7 Jahre alt',
      '2 Jahre alt',
      '6 Jahre alt',
    ],
  };
}
