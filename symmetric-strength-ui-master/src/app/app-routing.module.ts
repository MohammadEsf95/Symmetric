import {RouterModule, Routes} from "@angular/router";
import {PublicTemplateComponent} from "./layouts/public-template/public-template.component";
import {PUBLIC_ROUTES} from "./shared/routes/public-layout.routes";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {path: '', component: PublicTemplateComponent, data: {title: 'public-template template'}, children: PUBLIC_ROUTES},
  // {path: '', component: UserTemplateComponent, data: {title: 'user template'}, children: USER_ROUTES},
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
