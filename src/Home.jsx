import footerbanner from './banner/footer banner.png';
import rightarrow from './banner/right-arrow.png';
import stickeranime from './sticker/anime.jpg';
import stickermovie from './sticker/movie.jpg';
import stickergaming from './sticker/gaming.jpg';
import stickermusic from './sticker/music.jpg';
import stickercar from './sticker/car.jpg';
import stickeraesthetic from './sticker/aesthetic.jpg';
import stickercelebrities from './sticker/celebrities.jpg';
import stickersport from './sticker/sport.jpg';
import wallpostersection from './banner/Wall Posters section.png';
import polaroidsection from './banner/Polaroids section.png';
import iconspremiumquality from './icons/premium-quality.png';
import iconsdeliverytruck from './icons/premium-quality.png';
import iconscreditcard from './icons/premium-quality.png';
import iconsreturn from './icons/premium-quality.png';
import iconsgift from './icons/premium-quality.png';
import rev1 from './reviews/rev 1.jpg';
import rev2 from './reviews/rev 2.jpg';
import rev3 from './reviews/rev 3.jpg';
import rev4 from './reviews/rev 4.jpg';
import rev5 from './reviews/rev 5.jpg';
import rev6 from './reviews/rev 6.jpg';
import { Link } from "react-router";

function Home() {
  return (
    <div>
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
          <Link className="FooterLink about-link">About Us</Link>
        </div>
        <input type="text" className="search-input" placeholder="Search Posters, Categories..." />
        <i className="fa-solid fa-magnifying-glass nav-icon"></i>
        <i className="fa-solid fa-heart nav-icon"></i>
        <i className="fa-solid fa-user nav-icon"></i>
        <Link to="/AddtoCart"><i className="fa-solid fa-cart-shopping nav-icon"></i></Link>
      </div>

      <div>
        <img src={footerbanner} alt="" className="banner-home" />
      </div>

      <p className="section-title">Shop By Categories</p>

      <div className="categories-container">
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickeranime} alt="Anime" /> <br />
            <label className="category-label">Anime</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickermovie} alt="Movie" /> <br />
            <label className="category-label">Movie</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickergaming} alt="Gaming" /> <br />
            <label className="category-label">Gaming</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickermusic} alt="Music" /> <br />
            <label className="category-label">Music</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickercar} alt="Car" /> <br />
            <label className="category-label">Car</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickeraesthetic} alt="Aesthetic" /> <br />
            <label className="category-label">Aesthetic</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickercelebrities} alt="Celebrities" /> <br />
            <label className="category-label">Celebrities</label>
          </Link>
        </div>
        <div>
          <Link className="category-item-link">
            <img className="sticker" src={stickersport} alt="Sport" /> <br />
            <label className="category-label">Sport</label>
          </Link>
        </div>
      </div>

        {/* section */}

        <div className="collection-section">
  {/* Section Heading */}
  <div className="collection-heading">
    <div>
      <p className="collection-eyebrow">EXPLORE OUR COLLECTIONS</p>
      <h2>Find something that feels like you.</h2>
    </div>
    <p className="collection-description">
      From statement wall art to memories in your hands, discover prints made to match your style.
    </p>
  </div>

  {/* Collection Cards Grid */}
  <div className="collection-grid">
    {/* Wall Posters */}
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
            Explore Posters
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </Link>

    {/* Polaroid Prints */}
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
            Explore Polaroids
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </Link>
  </div>
</div>

      <div className="features-container">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <img src={iconspremiumquality} alt="" className="feature-icon" />
          </div>
          <div className="text">
            <h4 className="feature-title">Premium Quality</h4>
            <p className="feature-description">vibrant colors &<br />durable materials</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <img src={iconsdeliverytruck} alt="" className="feature-icon" />
          </div>
          <div className="text">
            <h4 className="feature-title">Fast Shipping</h4>
            <p className="feature-description">Safe & fast delivery<br />across india</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <img src={iconscreditcard} alt="" className="feature-icon" />
          </div>
          <div className="text">
            <h4 className="feature-title">Secure Payment</h4>
            <p className="feature-description">Multiple payment<br />options</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <img src={iconsreturn} alt="" className="feature-icon" />
          </div>
          <div className="text">
            <h4 className="feature-title">Easy Returns</h4>
            <p className="feature-description">Hassle-free returns<br />within 7 days</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <img src={iconsgift} alt="" className="feature-icon" />
          </div>
          <div className="text">
            <h4 className="feature-title">Perfect Gift</h4>
            <p className="feature-description">Ideal for any occasion<br />& special moments</p>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <div className="reviews-header">
          <div>
            <h4 className="reviews-title">Loved By Thousands</h4>
            <p className="reviews-subtitle">Tag us @posteroids and use #posteroids</p> <br />
          </div>
          <div>
            <Link>
              <button className="btn-view-all">
                <label>Follow Us On Instagram </label>
                <img className="btn-arrow-icon" src={rightarrow} alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className="reviews-gallery">
          <img className="reviews" src={rev1} alt="" />
          <img className="reviews" src={rev2} alt="" />
          <img className="reviews" src={rev3} alt="" />
          <img className="reviews" src={rev4} alt="" />
          <img className="reviews" src={rev5} alt="" />
          <img className="reviews" src={rev6} alt="" />
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

      <div className="footer-main">
        <div>
          <h2>POSTEROIDS.</h2>
          <h6><p>Premium posters and polaroids prints <br />that bring your walls to life.</p></h6>
          <div className="social-icons-row">
            <i className="fa-brands fa-instagram social-icon-first"></i>
            <i className="fa-brands fa-facebook social-icon"></i>
            <i className="fa-brands fa-pinterest social-icon"></i>
            <i className="fa-brands fa-youtube social-icon"></i>
          </div>
        </div>
        <div>
          <h5 className="footer-column-heading">Quick Links</h5>
          <h6>
            <ul className="footer-links-list">
              <li><Link className="footer-link-text" to={'/Home'}>Home</Link></li>
              <li><Link className="footer-link-text" to={'/WallPosters'}>Wall Posters</Link></li>
              <li><Link className="footer-link-text" to={'/Polaroids'}>Polaroids</Link></li>
              <li><Link className="footer-link-text">Custom Prints</Link></li>
              <li><Link className="footer-link-text">Categories</Link></li>
            </ul>
          </h6>
        </div>
        <div>
          <h5 className="footer-column-heading">Help & Support</h5>
          <h6>
            <ul className="footer-links-list">
              <li><Link className="footer-link-text">FAQs</Link></li>
              <li><Link className="footer-link-text">Shipping & Delivery</Link></li>
              <li><Link className="footer-link-text">Returns & Refunds</Link></li>
              <li><Link className="footer-link-text">Track Order</Link></li>
              <li><Link className="footer-link-text">Contact Us</Link></li>
            </ul>
          </h6>
        </div>
        <div>
          <h5 className="footer-column-heading">Company</h5>
          <h6>
            <ul className="footer-links-list">
              <li><Link className="footer-link-text">About Us</Link></li>
              <li><Link className="footer-link-text">Our Story</Link></li>
              <li><Link className="footer-link-text">Blog</Link></li>
              <li><Link className="footer-link-text">Careers</Link></li>
              <li><Link className="footer-link-text">Privacy Policy</Link></li>
            </ul>
          </h6>
        </div>
        <div>
          <h5 className="footer-column-heading">Contact Us</h5>
          <h6>
            <ul className="footer-links-list">
              <li><i className="fa fa-phone contact-icon" aria-hidden="true"></i><Link className="footer-link-text">+91 9385671620</Link></li>
              <li><i className="fa-solid fa-envelope contact-icon"></i><Link className="footer-link-text">posteroids@gmail.com</Link></li>
              <li><i className="fa-solid fa-location-dot contact-icon"></i><Link className="footer-link-text">Chennai,Tamil Nadu, India</Link></li>
            </ul>
          </h6>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <h6 className="copyright-text">{'\u00A9'} 2026 Posteroids. All rights reserved</h6>
        <i className="fab fa-cc-visa payment-icon visa"></i>
        <i className="fab fa-cc-mastercard payment-icon mastercard"></i>
        <i className="fab fa-cc-paypal payment-icon paypal"></i>
        <i className="fab fa-cc-apple-pay payment-icon applepay"></i>
        <i className="fab fa-cc-amazon-pay payment-icon amazonpay"></i>
      </div>
    </div>
  );
}

export default Home;