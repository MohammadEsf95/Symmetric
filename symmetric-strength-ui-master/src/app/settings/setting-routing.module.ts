import {RouterModule, Routes} from "@angular/router";
import {SettingComponent} from "./setting/setting.component";
import {NgModule} from "@angular/core";

const routes: Routes = [

  {
    path: '',
    component: SettingComponent,
    data: {
      title: 'settings'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
