import {NgModule} from "@angular/core";
import {AdminPageComponent} from "./admin-page.component";
import {AdminPageRoutingModule} from "./admin-page.routing.module";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    AdminPageRoutingModule,
    TableModule
  ]
})
export class AdminPageModule {}
