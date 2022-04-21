import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RewardIconComponent } from './components/reward-icon/reward-icon.component';



@NgModule({
  declarations: [
    RewardIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    RewardIconComponent
  ]
})
export class RewardModule { }
