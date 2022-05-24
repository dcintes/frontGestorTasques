import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { GroupHomeComponent } from "./components/group-home/group-home.component";
import { GroupComponent } from "./components/group/group.component";

const routes: Routes = [
  { path: 'create', component: GroupComponent, canActivate: [AuthGuard] },
  { path: ':group_id', component: GroupHomeComponent, canActivate: [AuthGuard] },
  { path: ':group_id/edit', component: GroupComponent, canActivate: [AuthGuard] },

  { path: ':group_id/member', loadChildren: () => import('../member/member.module').then(m => m.MemberModule) },
  
  { path: ':group_id/task', loadChildren: () => import('../task/task.module').then(m => m.TaskModule) },

  { path: ':group_id/reward', loadChildren: () => import('../reward/reward.module').then(m => m.RewardModule) },

  { path: ':group_id/template/task', loadChildren: () => import('../template-task/template-task.module').then(m => m.TemplateTaskModule) },

  { path: ':group_id/template/reward', loadChildren: () => import('../template-reward/template-reward.module').then(m => m.TemplateRewardModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }