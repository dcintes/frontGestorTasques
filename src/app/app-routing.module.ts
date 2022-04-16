import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { GroupHomeComponent } from './group/components/group-home/group-home.component';
import { GroupComponent } from './group/components/group/group.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { UserComponent } from './user/components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: UserHomeComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'group/create', component: GroupComponent, canActivate: [AuthGuard] },
  { path: 'group/:group_id', component: GroupHomeComponent, canActivate: [AuthGuard] },
  { path: 'group/:group_id/edit', component: GroupComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
