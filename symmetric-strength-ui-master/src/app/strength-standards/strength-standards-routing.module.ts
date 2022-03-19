import {RouterModule, Routes} from "@angular/router";
import {StrengthStandardsComponent} from "./strength-standards/strength-standards.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: StrengthStandardsComponent,
    data: {
      title: 'strength-standards'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrengthStandardsRoutingModule {

}
