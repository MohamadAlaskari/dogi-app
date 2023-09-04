import { Component, Input } from '@angular/core';
import { FriendBoxService } from 'src/app/services/home/friend-box.service';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent {
  folgen_status: string = 'folgen';
  folgen: boolean = true;

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() discription: string = '';
  @Input() profile_function: string = this.folgen_status;

  constructor(public friendBoxService: FriendBoxService) {}

  folgen_toggle() {
    this.folgen = !this.folgen;
    if (this.folgen) {
      this.folgen_status = 'folgen';
      this.friendBoxService.removeFriendByName(this.name);
    } else {
      this.folgen_status = 'Entfernen';
    }
    this.profile_function = this.folgen_status; // Aktualisierung von profile_function
  }
}
