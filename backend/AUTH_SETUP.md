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
`r`nAdd the frontend domain to the Google OAuth consent screen's authorized domains and set the Google client ID/secret only on the backend. Set `FRONTEND_URL` to the frontend origin and list that origin in `CORS_ALLOWED_ORIGINS`. Configure SMTP (`MAIL_*`) before enabling registration, since the register endpoint must send verification codes.

## Local development

In IntelliJ, add `-Dspring.profiles.active=local` to the backend run configuration's VM options. Keep the backend `.env` in the project root; the backend imports it when the working directory is either the project root or its parent folder. With the `local` profile active, email verification codes are printed in the backend logs instead of sent through SMTP. Google sign-in stays disabled unless the `google-oauth` profile is enabled and valid Google client credentials are supplied.

## Vercel and Neon

Vercel Postgres was replaced by Postgres providers through the Vercel Marketplace; Neon is one option. Connect a Neon Postgres integration to the Vercel project to provision/link a database and receive provider environment variables. This project is a Spring Boot/Java server; Vercel's official Functions runtime list does not include Java. Deploy the React frontend to Vercel and run this Spring Boot API on a Java-capable host. Copy the Neon connection details into that API host's variables, converting the provider URL to a JDBC URL if needed. Set `JDBC_DATABASE_URL`, `DB_USER`, and `DB_PASSWORD` on the backend host, and set the frontend's API base URL to `https://YOUR_API_HOST/api`.

The configured Vercel Marketplace Neon database already contains `public.app_users`, `public.email_verification_codes`, `public.products`, and `public.categories`. Additive Flyway migration `V1__create_cart_and_order_tables.sql` creates only `carts`, `cart_items`, `orders`, and `order_items`. The existing non-empty schema is baselined at version 0 so V1 can run without recreating existing tables. JPA remains on `ddl-auto=update` for the existing application mappings.

## Persistent carts and orders

The API runs under `/api`. Cart and order routes require `Authorization: Bearer <token>` and take the owner only from Spring Security's validated JWT principal. The browser never supplies a user ID or price. The backend reads current catalog prices, calculates totals, and stores order-time product name, image, category, unit-price, and quantity snapshots. Product deletion leaves the order snapshot intact and nulls its product reference.

| Method | Route | Request | Purpose |
| --- | --- | --- | --- |
| GET | `/api/cart` | — | Current user's cart and subtotal |
| PUT | `/api/cart/items/{productId}` | `{ "quantity": 2 }` | Set quantity from 1 to 99 |
| DELETE | `/api/cart/items/{productId}` | — | Remove a cart item |
| POST | `/api/orders` | Shipping address JSON | Place an order and clear the cart items |
| GET | `/api/orders` | — | Current user's order history |
| GET | `/api/orders/{orderId}` | — | One order owned by the current user |

Checkout JSON fields: `name`, `phone`, `addressLine1`, `addressLine2` (optional), `city`, `region`, `postalCode`, and two-letter `countryCode`. New orders have `PLACED` status. Payment is not collected or recorded by these endpoints.

Flyway adds user/product/order foreign keys, quantity and nonnegative amount checks, a unique cart per user, a unique product row per cart, and lookup indexes. It runs automatically at backend startup. No new environment variables are required. `JDBC_DATABASE_URL`, `DB_USER`, and `DB_PASSWORD` stay only on Railway; React calls the API using `REACT_APP_API_BASE_URL` and must not connect directly to Neon. For local development, point the API at a local or disposable PostgreSQL database and let Flyway apply V1 there; do not run local schema development against production.

## Frontend cart and checkout integration

```text
Wire the existing Posteroids React cart and checkout screens to the authenticated Spring API. Use the current API base URL and AuthContext token. Do not connect React directly to Postgres/Neon or expose database credentials.

Send Authorization: Bearer <token> for:
- GET /cart -> {id, items:[{productId,name,image,categoryName,unitPrice,quantity,lineTotal}], subtotal, currency}
- PUT /cart/items/{productId} with {quantity} (absolute quantity, 1–99)
- DELETE /cart/items/{productId}
- POST /orders with {name, phone, addressLine1, addressLine2, city, region, postalCode, countryCode}
- GET /orders and GET /orders/{orderId}

Keep the guest cart usable and merge it into the signed-in account cart. Clear guest items only after the server confirms the merge. Prompt guests to sign in before checkout. Show loading, empty, validation, error, confirmation, and order history states. Use server-returned prices and totals; never trust a total supplied by the browser. Orders have PLACED status and this API does not process payment. The backend migration owns the schema; do not create a frontend database schema.
```