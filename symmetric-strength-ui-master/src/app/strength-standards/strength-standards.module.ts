import {NgModule} from "@angular/core";
import {StrengthStandardsComponent} from "./strength-standards/strength-standards.component";
import {SharedModule} from "../shared/shared.module";
import {StrengthStandardsRoutingModule} from "./strength-standards-routing.module";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations:[
    StrengthStandardsComponent
  ],
  imports:[
    DropdownModule,
    InputNumberModule,
    StrengthStandardsRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    ButtonModule
  ],
  providers:[]
})
export class StrengthStandardsModule {

}
