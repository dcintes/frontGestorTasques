import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { GroupAvatarPipe } from './pipes/group-avatar.pipe';
import { UserAvatarPipe } from './pipes/user-avatar.pipe';



@NgModule({
  declarations: [
    UserAvatarPipe,
    GroupAvatarPipe,
    DateAgoPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserAvatarPipe,
    GroupAvatarPipe,
    DateAgoPipe,
  ],
})
export class SharedModule { }
