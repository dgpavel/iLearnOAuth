import { AuthConfig } from 'angular-oauth2-oidc';
export const environment = {
  oauthUrl: 'http://localhost:9090',
};
export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.oauthUrl,
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: 'ge',
  dummyClientSecret: 'secret',
  responseType: 'code',
  scope: 'openid',
  showDebugInformation: true,
  requireHttps: false,
  useHttpBasicAuth: true
};
