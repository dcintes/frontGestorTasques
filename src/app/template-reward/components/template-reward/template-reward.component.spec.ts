import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRewardComponent } from './template-reward.component';

describe('TemplateRewardComponent', () => {
  let component: TemplateRewardComponent;
  let fixture: ComponentFixture<TemplateRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRewardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
