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
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDeleteDialogComponent } from './components/user-delete-dialog/user-delete-dialog.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserGroupsComponent,
    UserInvitationsComponent,
    InvitationDialogComponent,
    UserComponent,
    UserDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
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
