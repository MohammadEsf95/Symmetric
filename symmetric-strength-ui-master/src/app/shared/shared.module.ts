import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MegaMenuModule} from "primeng/megamenu";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@NgModule(
  {
    declarations:[
    HeaderComponent,
    FooterComponent
  ],
      exports: [
          HeaderComponent,
          FooterComponent
      ],
    imports: [
      ButtonModule,
      MegaMenuModule,
      MenubarModule,
      InputTextModule,
      CommonModule,
    ]
  }
)
export class SharedModule {
}
