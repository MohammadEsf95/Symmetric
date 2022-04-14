import {NgModule} from "@angular/core";
import {AdminPageComponent} from "./admin-page.component";
import {AdminPageRoutingModule} from "./admin-page.routing.module";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DynamicDialogModule} from "primeng/dynamicdialog";

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    AdminPageRoutingModule,
    TableModule,
    PaginatorModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
  ]
})
export class AdminPageModule {}
