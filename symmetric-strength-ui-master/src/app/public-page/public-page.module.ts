import {NgModule} from "@angular/core";
import {PublicPageComponent} from "./public-page/public-page.component";
import {SharedModule} from "../shared/shared.module";
import {PublicPageRoutingModule} from "./public-page.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CheckboxModule} from "primeng/checkbox";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PublicPageComponent
  ],
  imports: [
    SharedModule,
    PublicPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    CheckboxModule,
    CommonModule
  ],
  providers: []
})
export class PublicPageModule {}
