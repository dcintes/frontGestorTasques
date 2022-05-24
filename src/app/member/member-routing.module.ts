import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../shared/guards/auth.guard";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MemberComponent } from "./components/member/member.component";

const routes: Routes = [
  { path: '', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: ':member_id/view', component: MemberComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }