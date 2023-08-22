import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names: string[] = [];
  images: string[] = [];
  discriptions: string[] = [];

  constructor() {}

  addFriend(img: string, name: string, discription: string) {
    this.images.push(img);
    this.names.push(name);
    this.discriptions.push(discription);
  }
  removeFriendByName(name: string) {
    const index = this.names.indexOf(name);
    if (index !== -1) {
      this.images.splice(index, 1);
      this.names.splice(index, 1);
      this.discriptions.splice(index, 1);
    }
  }
}
