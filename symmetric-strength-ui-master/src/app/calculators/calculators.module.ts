import {NgModule} from "@angular/core";
import {CalculatorsRoutingModule} from "./calculators-routing.module";
import {SharedModule} from "../shared/shared.module";
import { RmCalculatorComponent } from './rm-calculator/rm-calculator.component';
import { WilkComponent } from './wilk/wilk.component';
import { TdeeComponent } from './tdee/tdee.component';
import { IdealBodyweightComponent } from './ideal-bodyweight/ideal-bodyweight.component';
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    RmCalculatorComponent,
    WilkComponent,
    TdeeComponent,
    IdealBodyweightComponent
  ],
  imports:[
    CalculatorsRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    CommonModule
  ],
  providers:[]
})
export class CalculatorsModule {}
