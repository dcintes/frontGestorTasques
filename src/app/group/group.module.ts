import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupHomeComponent } from './components/group-home/group-home.component';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './components/group/group.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupDeleteDialogComponent } from './components/group-delete-dialog/group-delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [
    GroupHomeComponent,
    GroupComponent,
    GroupDeleteDialogComponent
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
    TaskModule,
  ]
})
export class GroupModule { }
