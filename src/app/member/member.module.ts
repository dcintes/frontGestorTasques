import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';
import { MemberDeleteDialogComponent } from './components/member-delete-dialog/member-delete-dialog.component';
import { MemberInviteDialogComponent } from './components/member-invite-dialog/member-invite-dialog.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberComponent } from './components/member/member.component';



@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MemberDeleteDialogComponent,
    MemberInviteDialogComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
  ]
})
export class MemberModule { }
