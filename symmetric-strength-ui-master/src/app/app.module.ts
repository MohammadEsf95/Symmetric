import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PublicTemplateComponent} from './layouts/public-template/public-template.component';
import {UserTemplateComponent} from './layouts/user-template/user-template.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import {CheckboxModule} from "primeng/checkbox";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ScrollTopModule} from 'primeng/scrolltop';
import {AdminTemplateComponent} from './layouts/admin-template/admin-template.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicTemplateComponent,
    UserTemplateComponent,
    AdminTemplateComponent,
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
    BrowserAnimationsModule,
    ScrollTopModule
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
            provider: new FacebookLoginProvider("366291448689657\n" +
              "f51b7a48b703f50a75fddb82c39a4b51")
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
