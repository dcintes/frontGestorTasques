import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardIconComponent } from './reward-icon.component';

describe('RewardIconComponent', () => {
  let component: RewardIconComponent;
  let fixture: ComponentFixture<RewardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
