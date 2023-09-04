import { TestBed } from '@angular/core/testing';

import { FriendBoxService } from './friend-box.service';

describe('FriendBoxService', () => {
  let service: FriendBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
