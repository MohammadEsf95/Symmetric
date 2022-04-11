import {NgModule} from "@angular/core";
import {AdminPageComponent} from "./admin-page.component";
import {AdminPageRoutingModule} from "./admin-page.routing.module";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    AdminPageRoutingModule,
    TableModule,
    PaginatorModule,
    CommonModule
  ]
})
export class AdminPageModule {}
