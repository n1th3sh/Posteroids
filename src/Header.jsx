import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="posteroids">Posteroids.</h1>
      <div className="nav-links">
        <Link className="FooterLink" to="/Home">Home</Link>
        <Link className="FooterLink" to="/WallPosters">Wall Posters</Link>
        <Link className="FooterLink" to="/Polaroids">Polaroids</Link>
        <Link className="FooterLink" to="/CustomPrints">Custom Prints</Link>
        <select className="category-select" defaultValue="">
          <option value="" disabled>Categories</option>
          <option value="Anime">Anime</option>
          <option value="Movie">Movie</option>
          <option value="Gaming">Gaming</option>
          <option value="Music">Music</option>
          <option value="Cars">Cars</option>
          <option value="Aesthetic">Aesthetic</option>
          <option value="Celebrities">Celebrities</option>
          <option value="Sports">Sports</option>
        </select>
        <Link className="FooterLink about-link" to="/about">About Us</Link>
      </div>
      <input type="text" className="search-input" placeholder="Search Posters, Categories..." />
      <i className="fa-solid fa-magnifying-glass nav-icon"></i>
      <i className="fa-solid fa-heart nav-icon"></i>
      <i className="fa-solid fa-user nav-icon"></i>
      <Link to="/AddtoCart"><i className="fa-solid fa-cart-shopping nav-icon"></i></Link>
    </div>
  );
}

export default Header;