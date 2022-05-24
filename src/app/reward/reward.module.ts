import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RewardCardComponent } from './components/reward-card/reward-card.component';
import { RewardIconComponent } from './components/reward-icon/reward-icon.component';
import { RewardComponent } from './components/reward/reward.component';
import { RewardRoutingModule } from './reward-routing.module';



@NgModule({
  declarations: [
    RewardIconComponent,
    RewardCardComponent,
    RewardComponent
  ],
  imports: [
    CommonModule,
    RewardRoutingModule,
    RouterModule,
    MatIconModule,
    SharedModule,
    MatChipsModule,
  ],
  exports: [
    RewardIconComponent,
    RewardCardComponent,
  ]
})
export class RewardModule { }
