import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTaskDeleteDialogComponent } from './template-task-delete-dialog.component';

describe('TemplateTaskDeleteDialogComponent', () => {
  let component: TemplateTaskDeleteDialogComponent;
  let fixture: ComponentFixture<TemplateTaskDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTaskDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTaskDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
