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
import { RewardModule } from '../reward/reward.module';
import { SharedModule } from '../shared/shared.module';
import { TaskModule } from '../task/task.module';
import { TemplateRewardModule } from '../template-reward/template-reward.module';
import { GroupDeleteDialogComponent } from './components/group-delete-dialog/group-delete-dialog.component';
import { GroupHomeComponent } from './components/group-home/group-home.component';
import { GroupNewsComponent } from './components/group-news/group-news.component';
import { GroupComponent } from './components/group/group.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  declarations: [
    GroupHomeComponent,
    GroupComponent,
    GroupDeleteDialogComponent,
    StadisticsComponent,
    GroupNewsComponent,
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
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
    RewardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
})
export class GroupModule { }
