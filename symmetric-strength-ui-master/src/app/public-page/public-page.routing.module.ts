import {RouterModule, Routes} from "@angular/router";
import {PublicPageComponent} from "./public-page/public-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [

  {
    path: '',
    component: PublicPageComponent,
    data: {
      title: 'public-page'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
