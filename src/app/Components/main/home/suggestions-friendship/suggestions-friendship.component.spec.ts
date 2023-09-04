import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsFriendshipComponent } from './suggestions-friendship.component';

describe('SuggestionsFriendshipComponent', () => {
  let component: SuggestionsFriendshipComponent;
  let fixture: ComponentFixture<SuggestionsFriendshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionsFriendshipComponent]
    });
    fixture = TestBed.createComponent(SuggestionsFriendshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
