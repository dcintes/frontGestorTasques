import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TaskComponent } from './components/task/task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { MatRippleModule } from '@angular/material/core';
import { TaskDeleteDialogComponent } from './components/task-delete-dialog/task-delete-dialog.component';
import { TaskAssignDialogComponent } from './components/task-assign-dialog/task-assign-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { TaskCreateDialogComponent } from './components/task-create-dialog/task-create-dialog.component';


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
