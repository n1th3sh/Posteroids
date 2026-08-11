import React, { Component } from 'react';
import { Link } from 'react-router';
import PolaroidsBanner from './banner/polaroids banner.png';
import iconspremiumquality from './icons/premium-quality.png';
import iconsdeliverytruck from './icons/premium-quality.png';
import iconscreditcard from './icons/premium-quality.png';
import iconsreturn from './icons/premium-quality.png';
import iconsgift from './icons/premium-quality.png';
import polaroidsbmw from './polaroids/bmw.jpg';
import polaroidsokjaanu from './polaroids/ok jaanu.jpg';
import polaroidsstrangerthings from './polaroids/stranger things.jpg';
import polaroidssunflower from './polaroids/sun flower.jpg';
import polaroidsarianagrande from './polaroids/Ariana grande.jpg';
import polaroidsbillieeilish from './polaroids/billie eilish.jpg';
import polaroidscristiano from './polaroids/cristiano.jpg';
import polaroidsbmwpurple from './polaroids/bmw purple.jpg';
import polaroidsdelulu from './polaroids/Delulu.jpg';
import polaroidsdhoni from './polaroids/dhoni.jpg';
import polaroidsgta6 from './polaroids/gta 6.jpg';
import polaroidshaaland from './polaroids/haaland.jpg';
import polaroidsjustinbieber from './polaroids/Justin bieber.jpg';
import polaroidsmamitha from './polaroids/Mamitha.jpg';
import polaroidsneymar from './polaroids/neymar.jpg';
import polaroidspinkbmw from './polaroids/pink bmw.jpg';
import polaroidsrolex from './polaroids/rolex.jpg';
import polaroidsuchiha from './polaroids/uchiha.jpg';
import polaroidssamantha from './polaroids/Samantha.jpg';
import polaroidsvirat from './polaroids/virat.jpg';

class Polaroids extends Component {
  render() {
    return (
      <div>
        <div className="header" style={{ display: 'flex', marginTop: '40px', marginLeft: '40px', marginRight: '20px' }}>
          <h1 className="posteroids" style={{ marginRight: '5%', marginLeft: '15px' }}>Posteroids.</h1>
          <div style={{ marginTop: '9px', marginRight: '15px' }}>
            <Link style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }} to="/Home">Home</Link>
            <Link style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }} to="/WallPosters">Wall Posters</Link>
            <Link style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }} to="/Polaroids">Polaroids</Link>
            <Link style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }}>Custom Prints</Link>
            <select style={{ marginRight: '35px', color: 'rgb(20, 20, 20)', fontWeight: 'bold' }} className="category-select" defaultValue="">
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
            <Link style={{ textDecoration: 'none', marginRight: '50px', color: 'rgb(20, 20, 20)' }} to="/About">About Us</Link>
          </div>
          <input type="text" style={{ marginTop: '8px', marginRight: '20px', height: '20px', width: '230px', border: 'none', color: 'rgb(109, 109, 109)' }} placeholder="Search Posters, Categories..." />
          <i className="fa-solid fa-magnifying-glass" style={{ marginTop: '9px', marginRight: '40px' }}></i>
          <i className="fa-solid fa-heart" style={{ marginTop: '9px', marginRight: '40px' }}></i>
          <i className="fa-solid fa-user" style={{ marginTop: '9px', marginRight: '40px' }}></i>
          <i className="fa-solid fa-cart-shopping" style={{ marginTop: '9px', marginRight: '40px' }}></i>
        </div>

        <div>
          <img src={PolaroidsBanner} alt="Polaroids Banner" style={{ height: '400px', width: '1470px', margin: '25px', borderRadius: '10px' }} />
        </div>

        <div style={{ marginTop: '10px', marginBottom: '20px', marginLeft: '60px', marginRight: '60px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <label style={{ marginTop: '2px' }}>Showing 1-16 of 248 products</label>
          </div>
          <div>
            <label style={{ marginTop: '2px' }}>Sort by:</label>{' '}
            <select style={{ marginRight: '35px', color: 'rgb(20, 20, 20)', fontWeight: 'bold' }} className="category-select" defaultValue="Popular">
              <option value="Popular">Popular</option>
              <option value="Top Rated">Top Rated</option>
              <option value="Newest">Newest</option>
              <option value="Frequently Purchased">Frequently Purchased</option>
            </select>
          </div>
        </div>

        <div className="wallp" style={{ marginBottom: '20px', marginLeft: '60px', marginRight: '60px', justifyContent: 'space-evenly', padding: '10px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', borderRadius: '10px' }}>
          <div className="wp">
            <img className="photo" src={polaroidsbmw} alt="BMW Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>BMW Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsokjaanu} alt="Ok Jannu Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Ok jannu Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsstrangerthings} alt="Eleven Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Eleven Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidssunflower} alt="Sunflower Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Sun flower Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsarianagrande} alt="Ariana Grande Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Ariana grande Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsbillieeilish} alt="Billie Eilish Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Billie eilish Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidscristiano} alt="Cristiano Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Cristiano Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsbmwpurple} alt="Purple BMW Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Purple BMW Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsdelulu} alt="Delulu Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Delulu Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsdhoni} alt="Dhoni Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Dhoni Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsgta6} alt="GTA 6 Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>GTA 6 Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidshaaland} alt="Haaland Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Haaland Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsjustinbieber} alt="Justin Bieber Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Justin bieber Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsmamitha} alt="Mamitha Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Mamitha Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsneymar} alt="Neymar Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Neymar Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidspinkbmw} alt="Pink BMW Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Pink BMW Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsrolex} alt="Rolex Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Rolex Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsuchiha} alt="Uchiha Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Uchiha Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidssamantha} alt="Samantha Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Samantha Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img className="photo" src={polaroidsvirat} alt="Virat Polaroid" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '350px', width: '240px' }} />
            <p>Virat Polaroid</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;19</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', margin: '35px', padding: '10px', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <div style={{ display: 'flex', padding: '10px' }}>
            <div style={{ marginRight: '3px' }}>
              <img src={iconspremiumquality} alt="" style={{ height: '60px', width: '60px' }} />
            </div>
            <div className="text">
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111' }}>Premium Quality</h4>
              <p style={{ marginTop: '3px', fontSize: '13px', color: '#777' }}>vibrant colors &<br />durable materials</p>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '10px' }}>
            <div style={{ marginRight: '3px' }}>
              <img src={iconsdeliverytruck} alt="" style={{ height: '60px', width: '60px' }} />
            </div>
            <div className="text">
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111' }}>Fast Shipping</h4>
              <p style={{ marginTop: '3px', fontSize: '13px', color: '#777' }}>Safe & fast delivery<br />across india</p>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '10px' }}>
            <div style={{ marginRight: '3px' }}>
              <img src={iconscreditcard} alt="" style={{ height: '60px', width: '60px' }} />
            </div>
            <div className="text">
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111' }}>Secure Payment</h4>
              <p style={{ marginTop: '3px', fontSize: '13px', color: '#777' }}>Multiple payment<br />options</p>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '10px' }}>
            <div style={{ marginRight: '3px' }}>
              <img src={iconsreturn} alt="" style={{ height: '60px', width: '60px' }} />
            </div>
            <div className="text">
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111' }}>Easy Returns</h4>
              <p style={{ marginTop: '3px', fontSize: '13px', color: '#777' }}>Hassle-free returns<br />within 7 days</p>
            </div>
          </div>

          <div style={{ display: 'flex', padding: '10px' }}>
            <div style={{ marginRight: '3px' }}>
              <img src={iconsgift} alt="" style={{ height: '60px', width: '60px' }} />
            </div>
            <div className="text">
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111' }}>Perfect Gift</h4>
              <p style={{ marginTop: '3px', fontSize: '13px', color: '#777' }}>Ideal for any occasion<br />& special moments</p>
            </div>
          </div>
        </div>

        <p style={{ backgroundColor: '#111' }}><br /></p>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
          <div>
            <h2>POSTEROIDS.</h2>
            <h6><p>Premium posters and polaroids prints <br />that bring your walls to life.</p></h6>
            <div style={{ display: 'flex' }}>
              <i className="fa-brands fa-instagram" style={{ marginRight: '10px', marginTop: '10px', marginBottom: '10px' }}></i>
              <i className="fa-brands fa-facebook" style={{ margin: '10px' }}></i>
              <i className="fa-brands fa-pinterest" style={{ margin: '10px' }}></i>
              <i className="fa-brands fa-youtube" style={{ margin: '10px' }}></i>
            </div>
          </div>

          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Quick Links</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/Home">Home</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/WallPosters">Wall Posters</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/Polaroids">Polaroids</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/CustomPrints">Custom Prints</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/Categories">Categories</Link></li>
              </ul>
            </h6>
          </div>

          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Help & Support</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/faqs">FAQs</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/shipping">Shipping & Delivery</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/returns">Returns & Refunds</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/track-order">Track Order</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/contact">Contact Us</Link></li>
              </ul>
            </h6>
          </div>

          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Company</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/about">About Us</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/story">Our Story</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/blog">Blog</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/careers">Careers</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to="/privacy">Privacy Policy</Link></li>
              </ul>
            </h6>
          </div>

          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Contact Us</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}>
                  <i className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }}></i>
                  <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>+91 9385671620</Link>
                </li>
                <li style={{ marginBottom: '3px' }}>
                  <i className="fa-solid fa-envelope" style={{ marginRight: '5px' }}></i>
                  <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>posteroids@gmail.com</Link>
                </li>
                <li style={{ marginBottom: '3px' }}>
                  <i className="fa-solid fa-location-dot" style={{ marginRight: '5px' }}></i>
                  <span style={{ color: 'rgb(20, 20, 20)' }}>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
            </h6>
          </div>
        </div>

        <div style={{ display: 'flex', paddingBottom: '5px' }}>
          <h6 style={{ marginLeft: '410px', marginRight: '350px' }}>{'\u00A9'} 2026 Posteroids. All rights reserved</h6>
          <i className="fab fa-cc-visa payment-icon visa"></i>
          <i className="fab fa-cc-mastercard payment-icon mastercard"></i>
          <i className="fab fa-cc-paypal payment-icon paypal"></i>
          <i className="fab fa-cc-apple-pay payment-icon applepay"></i>
          <i className="fab fa-cc-amazon-pay payment-icon amazonpay"></i>
        </div>
      </div>
    );
  }
}

export default Polaroids;