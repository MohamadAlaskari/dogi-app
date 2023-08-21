import { Component } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrls: ['./friendbox.component.scss'],
})
export class FriendboxComponent {
  constructor(public friendserver: FriendService) {}
}
