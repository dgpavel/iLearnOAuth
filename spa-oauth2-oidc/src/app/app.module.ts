import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authAppInitializerFactory } from './auth/auth-app-initializer.factory';
import { GeOauthService } from './auth/ge-oauth.service';
import { environment } from './auth/auth-code-flow.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [`${environment.apiUrl}`],
        sendAccessToken: true
      },
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: authAppInitializerFactory,
      deps: [GeOauthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
