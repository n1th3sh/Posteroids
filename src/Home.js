import { Component } from "react";
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
import wallpostersronaldo from './wall posters/ronaldo.jpg';
import wallpostersfightclub from './wall posters/fight club.jpg';
import wallpostershibiscus from './wall posters/hibiscus.jpg';
import wallpostersbatman from './wall posters/batman.jpg';
import polaroidsbmw from './polaroids/bmw.jpg';
import polaroidsokjaanu from './polaroids/ok jaanu.jpg';
import polaroidsstrangerthings from './polaroids/stranger things.jpg';
import polaroidssunflower from './polaroids/sun flower.jpg';
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

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header" style={{ display: 'flex', marginTop: '40px', marginLeft: '40px', marginRight: '20px' }}>
          <h1 className="posteroids" style={{ marginRight: '5%', marginLeft: '15px' }}>Posteroids.</h1>
          <div style={{ marginTop: '9px', marginRight: '15px' }}>
            <Link to={'/Home'} style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }}>Home</Link>
            <Link to={'/WallPosters'} style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }}>Wall Posters</Link>
            <Link to={'/Polaroids'} style={{ textDecoration: 'none', marginRight: '35px', color: 'rgb(20, 20, 20)' }}>Polaroids</Link>
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
            <Link style={{ textDecoration: 'none', marginRight: '50px', color: 'rgb(20, 20, 20)' }}>About Us</Link>
          </div>
          <input type="text" style={{ marginTop: '8px', marginRight: '20px', height: '20px', width: '230px', border: 'none', color: 'rgb(109, 109, 109)' }} placeholder="Search Posters, Categories..." />
          <i className="fa-solid fa-magnifying-glass" style={{ marginTop: '9px', marginRight: '40px' }}></i>
          <i className="fa-solid fa-heart" style={{ marginTop: '9px', marginRight: '40px' }}></i>
          <i className="fa-solid fa-user" style={{ marginTop: '9px', marginRight: '40px' }}></i>
          <i className="fa-solid fa-cart-shopping" style={{ marginTop: '9px', marginRight: '40px' }}></i>
        </div>

        <div>
          <img src={footerbanner} alt="" style={{ height: '700px', width: '1470px', margin: '25px', borderRadius: '10px' }} />
        </div>

        <p style={{ margin: '25px', marginLeft: '60px' }}>Shop By Categories</p>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px', margin: '30px', background: '#fff', borderRadius: '10px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px' }}>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickeranime} alt="Anime" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Anime</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickermovie} alt="Movie" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Movie</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickergaming} alt="Gaming" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Gaming</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickermusic} alt="Music" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Music</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickercar} alt="Car" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Car</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickeraesthetic} alt="Aesthetic" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Aesthetic</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickercelebrities} alt="Celebrities" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Celebrities</label>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>
              <img className="sticker" src={stickersport} alt="Sport" /> <br />
              <label style={{ display: 'flex', justifyContent: 'center' }}>Sport</label>
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', padding: '20px', margin: '30px', justifyContent: 'space-between' }}>
          <div style={{ padding: '10px', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
              <label style={{ marginTop: '2px' }}>Wall Posters</label>
              <Link to={'/WallPosters'}>
                <button style={{ border: 'none' }}>
                  <label>View all </label>
                  <img style={{ height: '15px', width: '15px' }} src={rightarrow} alt="" />
                </button>
              </Link>
            </div>
            <div style={{ display: 'flex' }}>
              <div className="wp">
                <img src={wallpostersronaldo} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Ronaldo Poster</p>
                <p>&#8377;99</p>
              </div>
              <div className="wp">
                <img src={wallpostersfightclub} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Fight club Poster</p>
                <p>&#8377;99</p>
              </div>
              <div className="wp">
                <img src={wallpostershibiscus} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Hibiscus Poster</p>
                <p>&#8377;99</p>
              </div>
              <div className="wp">
                <img src={wallpostersbatman} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Batman Poster</p>
                <p>&#8377;99</p>
              </div>
            </div>
          </div>

          <div style={{ padding: '10px', boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>
              <label style={{ marginTop: '2px' }}>Polaroid Prints</label>
              <Link to={'/Polaroids'}>
                <button style={{ border: 'none' }}>
                  <label>View all </label>
                  <img style={{ height: '15px', width: '15px' }} src={rightarrow} alt="" />
                </button>
              </Link>
            </div>
            <div style={{ display: 'flex' }}>
              <div className="wp">
                <img src={polaroidsbmw} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>BMW Polaroid</p>
                <p>&#8377;19</p>
              </div>
              <div className="wp">
                <img src={polaroidsokjaanu} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Ok jannu Polaroid</p>
                <p>&#8377;19</p>
              </div>
              <div className="wp">
                <img src={polaroidsstrangerthings} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Eleven Polaroid</p>
                <p>&#8377;19</p>
              </div>
              <div className="wp">
                <img src={polaroidssunflower} alt="" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', height: '190px', width: '145px' }} />
                <p>Sun flower Polaroid</p>
                <p>&#8377;19</p>
              </div>
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

        <div style={{ margin: '30px', padding: '20px', borderRadius: '10px', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ marginLeft: '10px' }}>Loved By Thousands</h4>
              <p style={{ marginTop: '5px', marginLeft: '10px', marginBottom: '5px', fontSize: '13px', color: '#777' }}>Tag us @posteroids and use #posteroids</p> <br />
            </div>
            <div>
              <Link>
                <button style={{ border: 'none' }}>
                  <label>Follow Us On Instagram </label>
                  <img style={{ height: '15px', width: '15px' }} src={rightarrow} alt="" />
                </button>
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <img className="reviews" src={rev1} alt="" />
            <img className="reviews" src={rev2} alt="" />
            <img className="reviews" src={rev3} alt="" />
            <img className="reviews" src={rev4} alt="" />
            <img className="reviews" src={rev5} alt="" />
            <img className="reviews" src={rev6} alt="" />
          </div>
        </div>

        <div style={{ display: 'flex', backgroundColor: '#111', color: '#fff', marginTop: '10px', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '200px', paddingRight: '200px' }}>
          <div style={{ marginRight: '100px' }}>
            <h3 style={{ marginBottom: '10px' }}>Stay Updated</h3>
            <p>Subscribe to get special offers, free giveaways, and<br />once-in-a-lifetime deals.</p>
          </div>
          <div>
            <input type="text" placeholder="Enter Your email address" className="sub" style={{ height: '40px', width: '400px', borderRadius: '10px' }} />
            <button style={{ height: '45px', width: '150px', borderRadius: '10px', backgroundColor: 'yellow', color: '#111' }}>Subscribe</button>
          </div>
        </div>

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
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to={'/Home'}>Home</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to={'/WallPosters'}>Wall Posters</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }} to={'/Polaroids'}>Polaroids</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Custom Prints</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Categories</Link></li>
              </ul>
            </h6>
          </div>
          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Help & Support</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>FAQs</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Shipping & Delivery</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Returns & Refunds</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Track Order</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Contact Us</Link></li>
              </ul>
            </h6>
          </div>
          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Company</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>About Us</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Our Story</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Blog</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Careers</Link></li>
                <li style={{ marginBottom: '3px' }}><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Privacy Policy</Link></li>
              </ul>
            </h6>
          </div>
          <div>
            <h5 style={{ marginLeft: '39px', marginBottom: '10px' }}>Contact Us</h5>
            <h6>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '3px' }}><i className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }}></i><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>+91 9385671620</Link></li>
                <li style={{ marginBottom: '3px' }}><i className="fa-solid fa-envelope" style={{ marginRight: '5px' }}></i><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>posteroids@gmail.com</Link></li>
                <li style={{ marginBottom: '3px' }}><i className="fa-solid fa-location-dot" style={{ marginRight: '5px' }}></i><Link style={{ textDecoration: 'none', color: 'rgb(20, 20, 20)' }}>Chennai,Tamil Nadu, India</Link></li>
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

export default Home;