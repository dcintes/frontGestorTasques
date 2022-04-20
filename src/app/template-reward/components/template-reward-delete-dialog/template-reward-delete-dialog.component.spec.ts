import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRewardDeleteDialogComponent } from './template-reward-delete-dialog.component';

describe('TemplateRewardDeleteDialogComponent', () => {
  let component: TemplateRewardDeleteDialogComponent;
  let fixture: ComponentFixture<TemplateRewardDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRewardDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRewardDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
