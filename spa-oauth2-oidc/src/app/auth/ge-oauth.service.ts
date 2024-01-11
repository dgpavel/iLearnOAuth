import { Injectable } from '@angular/core';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs';
import { authCodeFlowConfig } from './auth-code-flow.config';

@Injectable({
  providedIn: 'root',
})
export class GeOauthService {

  constructor(
    private oauthService: OAuthService

  ) {
    // Useful for debugging:
    this.oauthService.events.subscribe((event) => {
      if (event instanceof OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });

    this.oauthService.events
      .pipe(filter((e) => ['token_received'].includes(e.type)))
      .subscribe(() => this.loadUserDetails());

    this.oauthService.events
      .pipe(
        filter((e) => ['session_terminated', 'session_error'].includes(e.type))
      )
      .subscribe(() => this.navigateToLoginPage());

    this.oauthService.setupAutomaticSilentRefresh();
  }

  public runInitialLoginSequence(): Promise<void> {
    this.oauthService.configure(authCodeFlowConfig);
    return this.oauthService
      .loadDiscoveryDocument()
      .then(() => this.oauthService.tryLoginCodeFlow())
      .then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          return Promise.resolve();
        } else {
          this.navigateToLoginPage();
          return Promise.resolve();
        }
      });
  }

  public logout(): void {
    this.oauthService.revokeTokenAndLogout();
  }

  private loadUserDetails(): void {

  }

  private navigateToLoginPage() {
    this.oauthService.initLoginFlow();
  }
}
