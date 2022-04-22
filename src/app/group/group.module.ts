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
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared/shared.module';
import { TaskModule } from '../task/task.module';
import { TemplateRewardModule } from '../template-reward/template-reward.module';
import { GroupDeleteDialogComponent } from './components/group-delete-dialog/group-delete-dialog.component';
import { GroupHomeComponent } from './components/group-home/group-home.component';
import { GroupComponent } from './components/group/group.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';

@NgModule({
  declarations: [
    GroupHomeComponent,
    GroupComponent,
    GroupDeleteDialogComponent,
    StadisticsComponent
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
    TaskModule,
    TemplateRewardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
})
export class GroupModule { }
