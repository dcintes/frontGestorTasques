import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRewardCardComponent } from './template-reward-card.component';

describe('TemplateRewardCardComponent', () => {
  let component: TemplateRewardCardComponent;
  let fixture: ComponentFixture<TemplateRewardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRewardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRewardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
