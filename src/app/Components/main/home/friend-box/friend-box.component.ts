import { Component } from '@angular/core';
import { FriendBoxService } from 'src/app/services/home/friend-box.service';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss']
})
export class FriendBoxComponent {
  constructor(public friendBoxService: FriendBoxService) {}

}
