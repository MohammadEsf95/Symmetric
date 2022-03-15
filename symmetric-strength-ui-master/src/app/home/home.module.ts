import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  providers: [

  ]
})
export class HomeModule {
}
