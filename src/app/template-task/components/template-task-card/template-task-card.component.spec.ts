import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTaskCardComponent } from './template-task-card.component';

describe('TemplateTaskCardComponent', () => {
  let component: TemplateTaskCardComponent;
  let fixture: ComponentFixture<TemplateTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
