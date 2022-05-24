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
import { TemplateTaskCardComponent } from './components/template-task-card/template-task-card.component';
import { TemplateTaskDeleteDialogComponent } from './components/template-task-delete-dialog/template-task-delete-dialog.component';
import { TemplateTaskListComponent } from './components/template-task-list/template-task-list.component';
import { TemplateTaskComponent } from './components/template-task/template-task.component';
import { TemplateTaskRoutingModule } from './template-task-routing.module';



@NgModule({
  declarations: [
    TemplateTaskListComponent,
    TemplateTaskComponent,
    TemplateTaskCardComponent,
    TemplateTaskDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    TemplateTaskRoutingModule,
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
