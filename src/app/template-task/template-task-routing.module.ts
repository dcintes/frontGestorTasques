import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { TemplateTaskListComponent } from "./components/template-task-list/template-task-list.component";
import { TemplateTaskComponent } from "./components/template-task/template-task.component";

const routes: Routes = [
  { path: '', component: TemplateTaskListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: TemplateTaskComponent, canActivate: [AuthGuard] },
  { path: ':templateTask_id/:action', component: TemplateTaskComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateTaskRoutingModule { }