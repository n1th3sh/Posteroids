const API_ORIGIN = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/$/, '');
export const API_BASE_URL = `${API_ORIGIN}/api`;

export async function authRequest(path, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.detail || data.message || data.title || 'Something went wrong. Please try again.');
  return data;
}

export function getGoogleSignInUrl() {
  return `${API_BASE_URL}/oauth2/authorization/google`;
}
