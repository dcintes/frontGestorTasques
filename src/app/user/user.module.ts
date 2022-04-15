import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { UserInvitationsComponent } from './components/user-invitations/user-invitations.component';
import { InvitationDialogComponent } from './components/invitation-dialog/invitation-dialog.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserGroupsComponent,
    UserInvitationsComponent,
    InvitationDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
  ]
})
export class UserModule { }
