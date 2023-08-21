import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
})
export class DogCardComponent {
  @Input() img: String = '';
  @Input() text: String = '';

}
