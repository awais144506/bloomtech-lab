import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  domain: process.env.VITE_AUTH_DOMAIN,
  clientId: process.env.VITE_AUTH_CLIENT_ID,
  secret: process.env.AUTH0_SECRET || 'a_very_long_secret_that_is_at_least_32_characters_long',
  appBaseUrl: process.env.APP_BASE_URL || 'http://localhost:3000',
});
