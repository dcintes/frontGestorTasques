import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssignDialogComponent } from './task-assign-dialog.component';

describe('TaskAssignDialogComponent', () => {
  let component: TaskAssignDialogComponent;
  let fixture: ComponentFixture<TaskAssignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAssignDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAssignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
