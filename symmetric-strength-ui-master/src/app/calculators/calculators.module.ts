import {NgModule} from "@angular/core";
import {CalculatorsRoutingModule} from "./calculators-routing.module";
import {SharedModule} from "../shared/shared.module";
import { RmCalculatorComponent } from './rm-calculator/rm-calculator.component';
import { WilkComponent } from './wilk/wilk.component';
import { TdeeComponent } from './tdee/tdee.component';
import { IdealBodyweightComponent } from './ideal-bodyweight/ideal-bodyweight.component';

@NgModule({
  declarations:[
    RmCalculatorComponent,
    WilkComponent,
    TdeeComponent,
    IdealBodyweightComponent
  ],
  imports:[
    CalculatorsRoutingModule,
    SharedModule
  ],
  providers:[]
})
export class CalculatorsModule {}
