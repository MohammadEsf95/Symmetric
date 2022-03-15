import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {StaticRoutingModule} from "./static-routing.module";
import {LoginComponent} from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RegisterComponent} from './register/register.component';
import {CheckboxModule} from "primeng/checkbox";
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {CommonModule} from "@angular/common";
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SetPasswordComponent
  ],
  imports: [
    SharedModule,
    StaticRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CheckboxModule,
    CommonModule
  ]
})
export class StaticModule {
}
