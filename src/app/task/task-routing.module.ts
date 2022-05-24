import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { TaskComponent } from "./components/task/task.component";

const routes: Routes = [
  { path: 'create', component: TaskComponent, canActivate: [AuthGuard] },
  { path: ':task_id/:action', component: TaskComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }