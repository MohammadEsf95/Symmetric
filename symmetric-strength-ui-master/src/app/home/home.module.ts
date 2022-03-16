import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    DropdownModule,
    FormsModule
  ],
  providers: [

  ]
})
export class HomeModule {
}
