import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {CommonModule} from "@angular/common";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {ChartModule} from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    DropdownModule,
    FormsModule,
    CheckboxModule,
    CommonModule,
    InputNumberModule,
    ButtonModule,
    ChartModule,
    TabViewModule,
    HighchartsChartModule
  ],
  providers: [

  ]
})
export class HomeModule {
}
