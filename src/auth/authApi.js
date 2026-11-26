import { API_BASE_URL } from '../apiBaseUrl';
export { API_BASE_URL };

export async function authRequest(path, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const fallback = response.status >= 500
      ? 'The backend could not complete this request. Check that it is running and review its logs.'
      : 'Something went wrong. Please try again.';
    throw new Error(data.detail || data.message || data.title || fallback);
  }
  return data;
}

export function getGoogleSignInUrl() {
  return `${API_BASE_URL}/oauth2/authorization/google`;
}
