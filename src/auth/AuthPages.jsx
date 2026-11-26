import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { API_BASE_URL, authRequest, getGoogleSignInUrl } from './authApi';

function AuthShell({ eyebrow, title, description, children, footer }) {
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="auth-title">
        <Link className="auth-brand" to="/" aria-label="Posteroids home">Posteroids.</Link>
        <p className="auth-eyebrow">{eyebrow}</p>
        <h1 id="auth-title">{title}</h1>
        <p className="auth-description">{description}</p>
        {children}
        {footer && <div className="auth-footer">{footer}</div>}
      </section>
    </main>
  );
}

function FormError({ children }) {
  return children ? <p className="auth-error" role="alert">{children}</p> : null;
}

function GoogleButton() {
  return (
    <a className="auth-google-button" href={getGoogleSignInUrl()}>
      <span className="auth-google-mark" aria-hidden="true">G</span>
      Continue with Google
    </a>
  );
}

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { saveSession } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setBusy(true);
    try {
      saveSession(await authRequest('/auth/login', { email, password }));
      navigate(location.state?.from || '/', { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell eyebrow="WELCOME BACK" title="Sign in" description="Sign in to keep your favourite prints close." footer={<>New to Posteroids? <Link to="/register">Create an account</Link></>}>
      <GoogleButton />
      <div className="auth-divider"><span>or use your email</span></div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email address</label>
        <input id="login-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
        <div className="auth-label-row">
          <label htmlFor="login-password">Password</label>
          <button className="auth-text-button" type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Hide' : 'Show'}</button>
        </div>
        <input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
        <FormError>{error}</FormError>
        <button className="auth-submit" type="submit" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
      </form>
    </AuthShell>
  );
}

export function RegisterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    if (password !== confirmPassword) return setError('Your passwords do not match.');
    if (password.length < 8) return setError('Use at least 8 characters for your password.');
    setBusy(true);
    try {
      await authRequest('/auth/register', { name, email, password });
      navigate(`/verify-email?email=${encodeURIComponent(email)}`, { state: { email, from: location.state?.from } });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell eyebrow="JOIN THE COMMUNITY" title="Create your account" description="A few details, then we’ll send you a verification code." footer={<>Already have an account? <Link to="/login">Sign in</Link></>}>
      <GoogleButton />
      <div className="auth-divider"><span>or sign up with email</span></div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Name</label>
        <input id="register-name" type="text" autoComplete="name" maxLength={100} required value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="register-email">Email address</label>
        <input id="register-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
        <div className="auth-label-row">
          <label htmlFor="register-password">Password</label>
          <button className="auth-text-button" type="button" onClick={() => setShowPassword((value) => !value)}>{showPassword ? 'Hide' : 'Show'}</button>
        </div>
        <input id="register-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={8} maxLength={72} required value={password} onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="confirm-password">Confirm password</label>
        <input id="confirm-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" minLength={8} maxLength={72} required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <FormError>{error}</FormError>
        <button className="auth-submit" type="submit" disabled={busy}>{busy ? 'Creating account…' : 'Create account'}</button>
      </form>
    </AuthShell>
  );
}

export function VerifyEmailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { saveSession } = useAuth();
  const email = location.state?.email || new URLSearchParams(location.search).get('email') || '';
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const [resendWait, setResendWait] = useState(0);

  useEffect(() => {
    if (resendWait <= 0) return undefined;
    const timer = window.setTimeout(() => setResendWait((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [resendWait]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setBusy(true);
    try {
      saveSession(await authRequest('/auth/verify-email', { email, code }));
      navigate(location.state?.from || '/', { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusy(false);
    }
  }

  async function resendCode() {
    setError('');
    setNotice('');
    try {
      await authRequest('/auth/resend-code', { email });
      setNotice('A new code is on its way.');
      setResendWait(60);
    } catch (requestError) {
      setError(requestError.message);
      setResendWait(60);
    }
  }

  return (
    <AuthShell eyebrow="ONE LAST STEP" title="Check your email" description={email ? `Enter the six-digit code we sent to ${email}.` : 'Enter the email address you registered with and the six-digit code we sent.'} footer={<>Need to use another email? <Link to="/register">Go back to registration</Link></>}>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="verify-email">Email address</label>
        <input id="verify-email" type="email" autoComplete="email" required value={email} readOnly />
        <label htmlFor="verification-code">Verification code</label>
        <input id="verification-code" className="auth-code-input" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))} />
        <FormError>{error}</FormError>
        {notice && <p className="auth-success" role="status">{notice}</p>}
        <button className="auth-submit" type="submit" disabled={busy || !email}>{busy ? 'Verifying…' : 'Verify email'}</button>
      </form>
      <p className="auth-resend">Didn’t get a code? <button className="auth-text-button" type="button" onClick={resendCode} disabled={!email || resendWait > 0}>{resendWait > 0 ? `Resend in ${resendWait}s` : 'Resend code'}</button></p>
    </AuthShell>
  );
}

export function OAuthCallbackPage() {
  const navigate = useNavigate();
  const { saveSession } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.slice(1)).get('token');
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    if (!token) {
      setError('Google sign-in did not return a session. Please try again.');
      return;
    }

    fetch(`${API_BASE_URL}/auth/me`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } })
      .then(async (response) => {
        if (!response.ok) throw new Error('Could not verify your Google sign-in. Please try again.');
        return response.json();
      })
      .then((user) => {
        saveSession({ ...user, token });
        navigate('/', { replace: true });
      })
      .catch((requestError) => setError(requestError.message));
  }, [navigate, saveSession]);

  return (
    <AuthShell eyebrow="GOOGLE SIGN-IN" title={error ? 'Sign-in didn’t finish' : 'Signing you in…'} description={error || 'We’re securely finishing your Posteroids session.'} footer={error ? <Link to="/login">Return to sign in</Link> : null}>
      {!error && <div className="auth-loading" role="status" aria-label="Loading" />}
    </AuthShell>
  );
}
