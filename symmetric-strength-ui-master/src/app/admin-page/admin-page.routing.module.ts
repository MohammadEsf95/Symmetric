import {RouterModule, Routes} from "@angular/router";
import {AdminPageComponent} from "./admin-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    data: {
      title: 'admin-page'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule {}
