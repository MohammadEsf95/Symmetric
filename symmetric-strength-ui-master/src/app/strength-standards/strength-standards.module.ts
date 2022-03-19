import {NgModule} from "@angular/core";
import {StrengthStandardsComponent} from "./strength-standards/strength-standards.component";
import {SharedModule} from "../shared/shared.module";
import {StrengthStandardsRoutingModule} from "./strength-standards-routing.module";

@NgModule({
  declarations:[
    StrengthStandardsComponent
  ],
  imports:[
    StrengthStandardsRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class StrengthStandardsModule {

}
