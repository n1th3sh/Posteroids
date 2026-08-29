import { Link } from "react-router-dom";

function AddtoCart() {
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

    {/* cart items */}

    
    <p className="footer-divider-bar"><br /></p>
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

export default AddtoCart;