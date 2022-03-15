import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'main'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
