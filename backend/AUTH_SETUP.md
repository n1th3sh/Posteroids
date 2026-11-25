# Authentication and deployment setup

The backend exposes JSON username/password authentication, email verification, JWT bearer authentication, and Google OAuth sign-in. Auth users and email verification codes are persisted in PostgreSQL by JPA. With `spring.jpa.hibernate.ddl-auto=update`, Hibernate creates `app_users` and `email_verification_codes` when the service starts and updates existing mappings without dropping data.

## API routes

All routes are under the `/api` context path:

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/api/auth/register` | JSON `{ "email", "name", "password" }`; creates an unverified account and emails a code |
| POST | `/api/auth/verify-email` | JSON `{ "email", "code" }`; verifies the email and returns `{ "token", "email", "name", "role" }` |
| POST | `/api/auth/resend-code` | JSON `{ "email" }`; sends a replacement code |
| POST | `/api/auth/login` | JSON `{ "email", "password" }`; returns the same token response |
| GET | `/api/auth/me` | Requires `Authorization: Bearer <token>`; returns the current user and a refreshed JWT |
| GET | `/api/oauth2/authorization/google` | Starts Google sign-in |

Catalog GET routes remain public. Other API routes require a valid bearer token. Store the JWT in the frontend's chosen auth state and attach it as `Authorization: Bearer ...`. The Google success handler redirects to `${FRONTEND_URL}/auth/callback#token=...`; the frontend callback should read the fragment and immediately remove it from browser history.

## Required environment variables

Copy `.env.example` into your deployment's environment settings and provide real values there. Never commit `.env` files or put client secrets in frontend variables. `JWT_SECRET` must be a unique random value with at least 32 UTF-8 bytes. Use a PostgreSQL JDBC URL in `JDBC_DATABASE_URL`; Neon connection strings should use the `jdbc:postgresql://` scheme and `sslmode=require`. Provide `DB_USER` and `DB_PASSWORD` separately.

Set the same exact backend callback URL in Google Cloud Console and `GOOGLE_REDIRECT_URI`:

```text
https://YOUR_API_HOST/api/login/oauth2/code/google
```

Add the frontend domain to the Google OAuth consent screen's authorized domains and set the Google client ID/secret only on the backend. Set `FRONTEND_URL` to the frontend origin and list that origin in `CORS_ALLOWED_ORIGINS`. Configure SMTP (`MAIL_*`) before enabling registration, since the register endpoint must send verification codes.

## Vercel and Neon

Vercel Postgres was replaced by Postgres providers through the Vercel Marketplace; Neon is one option. Connect a Neon Postgres integration to the Vercel project to provision/link a database and receive provider environment variables. This project is a Spring Boot/Java server; Vercel's official Functions runtime list does not include Java. Deploy the React frontend to Vercel and run this Spring Boot API on a Java-capable host. Copy the Neon connection details into that API host's variables, converting the provider URL to a JDBC URL if needed. Set `JDBC_DATABASE_URL`, `DB_USER`, and `DB_PASSWORD` on the backend host, and set the frontend's API base URL to `https://YOUR_API_HOST/api`.

On the first backend startup against the chosen database, Hibernate will create the two auth tables. Existing `products` and `categories` tables continue using the same database configuration. For production, prefer a migration tool and `ddl-auto=validate` after the schema is established.

## Frontend handoff prompt

```text
In this repository, build responsive login, registration, and email verification screens for the existing Posteroids React frontend. Connect to the Spring Boot API at the configurable VITE_API_BASE_URL (default http://localhost:8080/api).

API contract:
- POST /auth/register {email, name, password} -> 202 {message}
- POST /auth/verify-email {email, code} -> {token, email, name, role}
- POST /auth/resend-code {email} -> 202 {message}
- POST /auth/login {email, password} -> {token, email, name, role}
- GET /auth/me with Authorization: Bearer <token> -> current user/token response
- Google sign-in: navigate the browser to ${VITE_API_BASE_URL}/oauth2/authorization/google. Add a /auth/callback route that reads token from location.hash, saves it to the app auth state, removes the hash with history.replaceState, then redirects to the intended page.

Create accessible forms with client-side required/email/password checks, loading and disabled states, clear API error messages, a six-digit verification-code input, resend-code action, password visibility toggle, and links between login/registration. Preserve existing Posteroids styling and navigation. Add an auth provider/hook or equivalent shared state, attach the bearer token to protected API requests, and provide a logout action that clears it. Do not expose Google client secrets in frontend code. Do not create a second auth database schema in the frontend: the backend JPA entities create app_users and email_verification_codes in the configured PostgreSQL database. Add VITE_API_BASE_URL to the frontend's documented environment variables and use the deployed API origin in production.
```
