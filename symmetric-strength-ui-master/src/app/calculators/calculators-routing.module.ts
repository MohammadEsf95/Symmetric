import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RmCalculatorComponent} from "./rm-calculator/rm-calculator.component";
import {IdealBodyweightComponent} from "./ideal-bodyweight/ideal-bodyweight.component";
import {WilkComponent} from "./wilk/wilk.component";
import {TdeeComponent} from "./tdee/tdee.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'one_rep_max',
        component: RmCalculatorComponent,
        data: {
          title: 'one_rep_max'
        }
      },
      {
        path: 'ideal_bodyweight',
        component: IdealBodyweightComponent,
        data: {
          title: 'ideal_bodyweight'
        }
      },
      {
        path: 'wilk',
        component: WilkComponent,
        data: {
          title: 'wilk'
        }
      },
      {
        path: 'tdee',
        component: TdeeComponent,
        data: {
          title: 'tdee'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule {}
