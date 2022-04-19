import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateTaskListComponent } from './components/template-task-list/template-task-list.component';
import { TemplateTaskComponent } from './components/template-task/template-task.component';
import { TemplateTaskCardComponent } from './components/template-task-card/template-task-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateTaskDeleteDialogComponent } from './components/template-task-delete-dialog/template-task-delete-dialog.component';



@NgModule({
  declarations: [
    TemplateTaskListComponent,
    TemplateTaskComponent,
    TemplateTaskCardComponent,
    TemplateTaskDeleteDialogComponent
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
  ]
})
export class TemplateTaskModule { }
