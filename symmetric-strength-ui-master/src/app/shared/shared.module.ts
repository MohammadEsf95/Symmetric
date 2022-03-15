import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MegaMenuModule} from "primeng/megamenu";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

@NgModule(
  {
    declarations:[
    HeaderComponent,
    FooterComponent
  ],
      exports: [
          HeaderComponent
      ],
    imports: [
      ButtonModule,
      MegaMenuModule,
      MenubarModule,
      InputTextModule,
    ]
  }
)
export class SharedModule {
}
