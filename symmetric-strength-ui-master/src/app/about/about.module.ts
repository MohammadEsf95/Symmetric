import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AboutComponent} from "./about/about.component";
import {AboutRoutingModule} from "./about-routing.module";
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    SharedModule,
    AccordionModule
  ],
  providers: [

  ]
})
export class AboutModule {}
