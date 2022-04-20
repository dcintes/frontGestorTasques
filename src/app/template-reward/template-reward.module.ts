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
import { RouterModule } from '@angular/router';
import { TemplateRewardCardComponent } from './components/template-reward-card/template-reward-card.component';
import { TemplateRewardDeleteDialogComponent } from './components/template-reward-delete-dialog/template-reward-delete-dialog.component';
import { TemplateRewardListComponent } from './components/template-reward-list/template-reward-list.component';
import { TemplateRewardComponent } from './components/template-reward/template-reward.component';



@NgModule({
  declarations: [
    TemplateRewardComponent,
    TemplateRewardListComponent,
    TemplateRewardCardComponent,
    TemplateRewardDeleteDialogComponent
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
  ],
  exports: [
    TemplateRewardListComponent,
  ],
})
export class TemplateRewardModule { }