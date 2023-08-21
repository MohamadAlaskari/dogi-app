import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent {
  folgen_status: string = 'folgen';
  folgen: boolean = true;

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() discription: string = '';
  @Input() profile_function: string = this.folgen_status;

  constructor(public friendservice: FriendService) {}

  folgen_toggle() {
    this.folgen = !this.folgen;
    if (this.folgen) {
      this.folgen_status = 'folgen';
      this.friendservice.removeFriendByName(this.name);
    } else {
      this.folgen_status = 'Entfernen';
    }
    this.profile_function = this.folgen_status; // Aktualisierung von profile_function
  }
}
