import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupAvatarPipe } from './pipes/group-avatar.pipe';
import { UserAvatarPipe } from './pipes/user-avatar.pipe';



@NgModule({
  declarations: [
    UserAvatarPipe,
    GroupAvatarPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserAvatarPipe,
    GroupAvatarPipe,
  ],
})
export class SharedModule { }
