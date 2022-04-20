import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRewardListComponent } from './template-reward-list.component';

describe('TemplateRewardListComponent', () => {
  let component: TemplateRewardListComponent;
  let fixture: ComponentFixture<TemplateRewardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRewardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRewardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
