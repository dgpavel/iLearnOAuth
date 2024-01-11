import { GeOauthService } from './ge-oauth.service';

export function authAppInitializerFactory(
  oauthService: GeOauthService
): () => Promise<void> {
  return () => oauthService.runInitialLoginSequence();
}