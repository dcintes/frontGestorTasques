import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MemberDeleteDialogComponent } from './components/member-delete-dialog/member-delete-dialog.component';
import { MemberInviteDialogComponent } from './components/member-invite-dialog/member-invite-dialog.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberComponent } from './components/member/member.component';
import { MemberRoutingModule } from './member-routing.module';



@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MemberDeleteDialogComponent,
    MemberInviteDialogComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
  ]
})
export class MemberModule { }
