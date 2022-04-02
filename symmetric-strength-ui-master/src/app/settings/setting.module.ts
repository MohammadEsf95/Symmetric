import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {SettingRoutingModule} from "./setting-routing.module";
import {CommonModule} from "@angular/common";
import {SettingComponent} from "./setting/setting.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    SettingComponent
  ],
  imports:[
    SharedModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CheckboxModule,
    CommonModule
  ],
  providers: [

  ]
})
export class SettingModule {}
