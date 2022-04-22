import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InvitationDialogComponent } from './components/invitation-dialog/invitation-dialog.component';
import { UserDeleteDialogComponent } from './components/user-delete-dialog/user-delete-dialog.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserInvitationsComponent } from './components/user-invitations/user-invitations.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserGroupsComponent,
    UserInvitationsComponent,
    InvitationDialogComponent,
    UserComponent,
    UserDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
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
  ],
})
export class UserModule { }
