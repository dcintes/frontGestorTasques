import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { TemplateRewardComponent } from "./components/template-reward/template-reward.component";

const routes: Routes = [
  { path: 'create', component: TemplateRewardComponent, canActivate: [AuthGuard] },
  { path: ':templateReward_id/:action', component: TemplateRewardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRewardRoutingModule { }