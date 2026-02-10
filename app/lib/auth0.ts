// app/lib/auth0.ts
import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  // Use non-Vite naming for Next.js server-side variables
  domain: process.env.AUTH0_DOMAIN, 
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  appBaseUrl: process.env.AUTH0_BASE_URL || 'http://localhost:3000',
});