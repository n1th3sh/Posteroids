import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
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
              <li><Link className="footer-link-text" to="/Home">Home</Link></li>
              <li><Link className="footer-link-text" to="/WallPosters">Wall Posters</Link></li>
              <li><Link className="footer-link-text" to="/Polaroids">Polaroids</Link></li>
              <li><Link className="footer-link-text" to="/CustomPrints">Custom Prints</Link></li>
              <li><Link className="footer-link-text" to="/Categories">Categories</Link></li>
            </ul>
          </h6>
        </div>
        <div>
          <h5 className="footer-column-heading">Help & Support</h5>
          <h6>
            <ul className="footer-links-list">
              <li><Link className="footer-link-text" to="/faqs">FAQs</Link></li>
              <li><Link className="footer-link-text" to="/shipping">Shipping & Delivery</Link></li>
              <li><Link className="footer-link-text" to="/returns">Returns & Refunds</Link></li>
              <li><Link className="footer-link-text" to="/track-order">Track Order</Link></li>
              <li><Link className="footer-link-text" to="/contact">Contact Us</Link></li>
            </ul>
          </h6>
        </div>
        <div>
          <h5 className="footer-column-heading">Company</h5>
          <h6>
            <ul className="footer-links-list">
              <li><Link className="footer-link-text" to="/about">About Us</Link></li>
              <li><Link className="footer-link-text" to="/story">Our Story</Link></li>
              <li><Link className="footer-link-text" to="/blog">Blog</Link></li>
              <li><Link className="footer-link-text" to="/careers">Careers</Link></li>
              <li><Link className="footer-link-text" to="/privacy">Privacy Policy</Link></li>
            </ul>
          </h6>
        </div>
        <div>
          <h5 className="footer-column-heading">Contact Us</h5>
          <h6>
            <ul className="footer-links-list">
              <li><i className="fa fa-phone contact-icon" aria-hidden="true"></i><Link className="footer-link-text" to="tel:+919385671620">+91 9385671620</Link></li>
              <li><i className="fa-solid fa-envelope contact-icon"></i><Link className="footer-link-text" to="mailto:posteroids@gmail.com">posteroids@gmail.com</Link></li>
              <li><i className="fa-solid fa-location-dot contact-icon"></i><span className="footer-link-text">Chennai, Tamil Nadu, India</span></li>
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
    </>
  );
}

export default Footer;