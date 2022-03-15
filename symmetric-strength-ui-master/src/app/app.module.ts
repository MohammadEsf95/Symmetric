import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PublicTemplateComponent} from './layouts/public-template/public-template.component';
import {UserTemplateComponent} from './layouts/user-template/user-template.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {CheckboxModule} from "primeng/checkbox";
import {StaticModule} from "./static/static.module";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PublicTemplateComponent,
    UserTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    SocialLoginModule,
    CheckboxModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [
    MessageService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1020256754098-45ni7p55oe31cde603nussf6eei3sm0t.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("YourFacebookAppID")
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
