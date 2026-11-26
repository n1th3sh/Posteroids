import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from './auth/AuthContext';

function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  const submitSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) navigate(`/Search?q=${encodeURIComponent(query)}`);
  };

  const updateSearch = (value) => {
    setSearchTerm(value);
    const query = value.trim();
    if (query) {
      navigate(`/Search?q=${encodeURIComponent(query)}`, { replace: true });
    } else if (window.location.pathname.toLowerCase() === '/search') {
      navigate('/Search', { replace: true });
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" to="/" aria-label="Posteroids home">
          <span className="brand-stamp" aria-hidden="true">P</span>
          <span className="posteroids">posteroids<span className="brand-dot">.</span></span>
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <NavLink className={({ isActive }) => `header-nav-link${isActive ? ' is-active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `header-nav-link${isActive ? ' is-active' : ''}`} to="/WallPosters">Wall Posters</NavLink>
          <NavLink className={({ isActive }) => `header-nav-link${isActive ? ' is-active' : ''}`} to="/Polaroids">Polaroids</NavLink>
          <NavLink className={({ isActive }) => `header-nav-link${isActive ? ' is-active' : ''}`} to="/CustomPrints">Custom Prints</NavLink>
          <NavLink className={({ isActive }) => `header-nav-link${isActive ? ' is-active' : ''}`} to="/about">About Us</NavLink>
        </nav>

        <form className="search-form" role="search" onSubmit={submitSearch}>
          <input
            type="search"
            className="search-input"
            placeholder="Search prints..."
            aria-label="Search products"
            value={searchTerm}
            onChange={(event) => updateSearch(event.target.value)}
          />
          <button className="search-submit" type="submit" aria-label="Submit product search">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </button>
        </form>

        <Link className="cart-link" to="/AddtoCart" aria-label="Open shopping cart" title="Shopping cart">
          <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
          <span>Cart</span>
        </Link>

        <div className="profile-wrap">
          <button
            className={`profile-button${profileOpen ? ' is-open' : ''}`}
            type="button"
            aria-label="Open profile menu"
            aria-expanded={profileOpen}
            aria-controls="profile-menu"
            onClick={() => setProfileOpen((open) => !open)}
          >
            <i className="fa-regular fa-user" aria-hidden="true"></i>
            <span>Profile</span>
            <i className="fa-solid fa-chevron-down profile-chevron" aria-hidden="true"></i>
          </button>
          {profileOpen && (
            <div className="profile-menu" id="profile-menu">
              <span className="profile-menu-label">YOUR ACCOUNT</span>
              {user ? <><p>Signed in as {user.email}</p><Link to="/orders" onClick={() => setProfileOpen(false)}>Order history</Link><button className="profile-auth-action" type="button" onClick={() => { signOut(); setProfileOpen(false); }}>Sign out</button></> : <><p>Browsing as a guest</p><Link to="/login" onClick={() => setProfileOpen(false)}>Sign in</Link><Link to="/register" onClick={() => setProfileOpen(false)}>Create account</Link></>}
              <Link to="/AddtoCart" onClick={() => setProfileOpen(false)}>
                View your cart <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
