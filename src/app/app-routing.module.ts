import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { VerfifyStringComponent } from './verfify-string/verfify-string.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "createUser",
    component: CreateUserComponent
  },
  {
    path: "forget",
    component: ForgetComponent
  },
  {
    path: "reset/:email/:id",
    component: ResetComponent
  },
  {
    path: "active/:email",
    component: ActiveAccountComponent
  },
  {
    path: "verify",
    component: VerfifyStringComponent
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
