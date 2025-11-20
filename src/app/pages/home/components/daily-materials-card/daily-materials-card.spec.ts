import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMaterialsCard } from './daily-materials-card';

describe('DailyMaterialsCard', () => {
  let component: DailyMaterialsCard;
  let fixture: ComponentFixture<DailyMaterialsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyMaterialsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyMaterialsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
