import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWeaponsCard } from './user-weapons-card';

describe('UserWeaponsCard', () => {
  let component: UserWeaponsCard;
  let fixture: ComponentFixture<UserWeaponsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWeaponsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWeaponsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
