import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {SetPasswordComponent} from "./set-password/set-password.component";
import {SetUsernameComponent} from "./set-username/set-username.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    children:
      [
        {
          path: 'login',
          component: LoginComponent,
          data: {
            title: 'login'
          }
        },
        {
          path: 'register',
          component: RegisterComponent,
          data: {
            title: 'register'
          }
        },
        {
          path: 'forgot-password',
          component: ForgotPasswordComponent,
          data: {
            title: 'forgot-password'
          }
        },
        {
          path: 'set-password',
          component: SetPasswordComponent,
          data: {
            title: 'set-password'
          }
        },
        {
          path: 'set-username',
          component: SetUsernameComponent,
          data: {
            title: 'set-username'
          }
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {
}
