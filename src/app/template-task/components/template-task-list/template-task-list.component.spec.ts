import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTaskListComponent } from './template-task-list.component';

describe('TemplateTaskListComponent', () => {
  let component: TemplateTaskListComponent;
  let fixture: ComponentFixture<TemplateTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
