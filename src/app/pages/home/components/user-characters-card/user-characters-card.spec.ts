import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCharactersCard } from './user-characters-card';

describe('UserCharactersCard', () => {
  let component: UserCharactersCard;
  let fixture: ComponentFixture<UserCharactersCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCharactersCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCharactersCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
