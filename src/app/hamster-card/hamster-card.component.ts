import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss'],
})
export class HamsterCardComponent {
  @Input() img: String = 'hamster_1.jpg';
  @Input() text: String = '';

}
