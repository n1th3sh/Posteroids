import React from 'react';
import { Link } from "react-router-dom";
import Features from './Features';
import Footer from './Footer';

import footerbanner from './assets/banner/footer banner.png';
import rightarrow from './assets/banner/right-arrow.png';
import wallpostersection from './assets/banner/Wall Posters section.png';
import polaroidsection from './assets/banner/Polaroids section.png';

import rev1 from './assets/reviews/rev 1.jpg';
import rev2 from './assets/reviews/rev 2.jpg';
import rev3 from './assets/reviews/rev 3.jpg';
import rev4 from './assets/reviews/rev 4.jpg';
import rev5 from './assets/reviews/rev 5.jpg';
import rev6 from './assets/reviews/rev 6.jpg';

const reviews = [rev1, rev2, rev3, rev4, rev5, rev6];

function Home() {
  return (
    <div>
      <div>
        <img src={footerbanner} alt="Home Banner" className="banner-home" />
      </div>

      <div className="collection-section">
        <div className="collection-heading">
          <div>
            <p className="collection-eyebrow">EXPLORE OUR COLLECTIONS</p>
            <h2>Find something that feels like you.</h2>
          </div>
          <p className="collection-description">
            From statement wall art to memories in your hands, discover prints made to match your style.
          </p>
        </div>

        <div className="collection-grid">
          <Link to="/WallPosters" className="collection-card">
            <div className="card-media">
              <img src={wallpostersection} alt="Wall Posters" />
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <div className="collection-top-meta">
                <span className="collection-badge">POSTEROIDS</span>
                <span className="collection-number">01</span>
              </div>
              <div className="collection-bottom-meta">
                <h3 className="collection-title">Wall Posters</h3>
                <p className="collection-text">
                  Original interpretation of premium visual striking hot uncovered streetwear and design.
                </p>
                <span className="collection-cta">
                  Explore Posters <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </Link>

          <Link to="/Polaroids" className="collection-card">
            <div className="card-media">
              <img src={polaroidsection} alt="Polaroid Prints" />
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <div className="collection-top-meta">
                <span className="collection-badge">POSTEROIDS</span>
                <span className="collection-number">02</span>
              </div>
              <div className="collection-bottom-meta">
                <h3 className="collection-title">Polaroid Prints</h3>
                <p className="collection-text">
                  Original interpretation of premium visual striking hot uncovered streetwear and design.
                </p>
                <span className="collection-cta">
                  Explore Polaroids <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Features />

      <div className="reviews-section">
        <div className="reviews-header">
          <div>
            <h4 className="reviews-title">Loved By Thousands</h4>
            <p className="reviews-subtitle">Tag us @posteroids and use #posteroids</p> <br />
          </div>
          <div>
            <Link to="/reviews">
              <button className="btn-view-all">
                <label>Follow Us On Instagram </label>
                <img className="btn-arrow-icon" src={rightarrow} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="reviews-gallery">
          {reviews.map((rev, idx) => (
            <img key={idx} className="reviews" src={rev} alt={`Review ${idx + 1}`} />
          ))}
        </div>
      </div>

      <div className="newsletter-bar">
        <div className="newsletter-info">
          <h3 className="newsletter-title">Stay Updated</h3>
          <p>Subscribe to get special offers, free giveaways, and<br />once-in-a-lifetime deals.</p>
        </div>
        <div>
          <input type="text" placeholder="Enter Your email address" className="sub" />
          <button className="btn-subscribe">Subscribe</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
