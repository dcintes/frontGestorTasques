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
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TaskAssignDialogComponent } from './components/task-assign-dialog/task-assign-dialog.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskCreateDialogComponent } from './components/task-create-dialog/task-create-dialog.component';
import { TaskDeleteDialogComponent } from './components/task-delete-dialog/task-delete-dialog.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskCardComponent,
    TaskDeleteDialogComponent,
    TaskAssignDialogComponent,
    TaskCreateDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskModule { }
