import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInviteDialogComponent } from './member-invite-dialog.component';

describe('MemberInviteDialogComponent', () => {
  let component: MemberInviteDialogComponent;
  let fixture: ComponentFixture<MemberInviteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberInviteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInviteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
