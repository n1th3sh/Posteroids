# Posteroids frontend API integration

## Backend contract used by the frontend

The React app calls `/api/products` and `/api/products/{id}`. During local development, the CRA proxy in `package.json` forwards these paths to `http://localhost:8080`. For deployment, `REACT_APP_API_BASE_URL` should be the backend origin only, without `/api` (for example, `https://api.example.com`).

| Method | Endpoint | Use |
|---|---|---|
| GET | `/api/products` | Load products for both category pages |
| GET | `/api/products/{id}` | Load one product by ID, including UUID IDs |

The frontend accepts a JSON array, a Spring page with a `content` array, or common `data`/`products` wrappers. Each product should include `id`, `name`, `image`, `price`, optional `rating`, `purchases`, and `dateAdded`, plus category information. Category filtering recognizes `category.name`, `categoryName`, `categoryType`, `type`, and the image path as a fallback.

Wall posters and Polaroids are filtered from the product list using `product.category.name`. The category names should identify those groups, for example `Wall Posters` and `Polaroids`.

The detail page route remains `/ViewCard/{category}/{id}` for existing links, but the frontend looks up the product using only `GET /products/{id}`. The ID is treated as a string, so UUIDs work.

## Local setup

1. Start the Spring Boot backend on port `8080`.
2. Configure backend CORS to allow the React development origin. Create React App normally uses `http://localhost:3000`; if another app is using that port and React starts on `3001`, allow `http://localhost:3001` instead (or allow both during development).
3. If the backend uses a different API base URL, set `REACT_APP_API_BASE_URL` in `.env.local` and restart the React dev server.
4. Start React with `npm start`.

The previous JSON Server calls on port `3000` were removed from product lists and product details. Redux Toolkit Query now fetches and caches backend product data. The cart is client-side Redux state and is not persisted to the backend or across page refreshes.

## Backend checks if requests fail

- Confirm `GET /api/products` returns products and category information (or image paths that identify their category).
- Confirm `GET /api/products/{id}` accepts UUID path values and returns one product.
- Confirm category data is serialized as an object with a `name` field, without recursive entity serialization.
- Confirm CORS permits the frontend origin.
- Inspect the browser Network panel for the exact response if the backend wraps the list differently; update `transformResponse` in `src/services/productsApi.js` to match it.
# Authentication API

The frontend auth pages use the Spring API at the backend origin configured with `REACT_APP_API_BASE_URL` (for example `https://your-api.example.com`, without `/api`). Endpoints are:

- `POST /api/auth/register` — create an account and send an email verification code.
- `POST /api/auth/verify-email` — verify the code and return a JWT session.
- `POST /api/auth/resend-code` — send another verification code.
- `POST /api/auth/login` — authenticate with email and password.
- `GET /api/auth/me` — load the current user with `Authorization: Bearer <token>`.
- `GET /api/oauth2/authorization/google` — start Google OAuth. On success the API redirects to `/auth/callback#token=...` on the frontend.
