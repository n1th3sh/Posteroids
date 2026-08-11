import React, { Component } from 'react';
import { Link } from 'react-router';
import iconspremiumquality from './icons/premium-quality.png';
import iconsdeliverytruck from './icons/premium-quality.png';
import iconscreditcard from './icons/premium-quality.png';
import iconsreturn from './icons/premium-quality.png';
import iconsgift from './icons/premium-quality.png';
import ronaldoPoster from './wall posters/ronaldo.jpg';
import fightClubPoster from './wall posters/fight club.jpg';
import hibiscusPoster from './wall posters/hibiscus.jpg';
import batmanPoster from './wall posters/batman.jpg';
import mahaanPoster from './wall posters/mahaan.jpg';
import neelambariPoster from './wall posters/neelambari.jpg';
import pattrickPoster from './wall posters/pattrick.jpg';
import porsche911Poster from './wall posters/porsche 911.jpg';
import v2vPoster from './wall posters/v2v.jpg';
import pokkiriPoster from './wall posters/pokkiri.jpg';
import billieEilishPoster from './wall posters/billie eilish.jpg';
import luffyPoster from './wall posters/Luffy.jpg';
import messiPoster from './wall posters/messi.jpg';
import kendrickPoster from './wall posters/kendrick.jpg';
import porschePoster from './wall posters/porsche.jpg';
import peakyBlindersPoster from './wall posters/Peaky Blinders.jpg';
import brunoMarsPoster from './wall posters/Bruno Mars.jpg';
import neymarPoster from './wall posters/neymar.jpg';
import meiyazhaganPoster from './wall posters/meiyazhagan.jpg';
import zoroPoster from './wall posters/zoro.jpg';
import WallPostersBanner from './banner/wall poster banner.png';

class WallPosters extends Component {
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
          <img src={WallPostersBanner} alt="Wall Poster Banner" style={{ height: '400px', width: '1470px', margin: '25px', borderRadius: '10px' }} />
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
            <img
              className="photo"
              src={ronaldoPoster}
              alt="Ronaldo Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Ronaldo Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={fightClubPoster}
              alt="Fight Club Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>fight club Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={hibiscusPoster}
              alt="Hibiscus Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Hibiscus Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={batmanPoster}
              alt="Batman Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Batman Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={mahaanPoster}
              alt="Mahaan Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Mahaan Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={neelambariPoster}
              alt="Neelambari Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Neelambari Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={pattrickPoster}
              alt="Patrick Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Pattrick Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={porsche911Poster}
              alt="Porsche 911 Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Porsche 911 Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={v2vPoster}
              alt="V2V Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>V2V Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={pokkiriPoster}
              alt="Pokkiri Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Pokkiri Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={billieEilishPoster}
              alt="Billie Eilish Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Billie eilish Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={luffyPoster}
              alt="Luffy Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Luffy Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={messiPoster}
              alt="Messi Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Messi Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={kendrickPoster}
              alt="Kendrick Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Kendrick Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={porschePoster}
              alt="Porsche Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Porsche Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={peakyBlindersPoster}
              alt="Peaky Blinders Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Peaky Blinders Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={brunoMarsPoster}
              alt="Bruno Mars Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Bruno Mars Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={neymarPoster}
              alt="Neymar Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Neymar Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={meiyazhaganPoster}
              alt="Meiyazhagan Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Meiyazhagan Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div className="wp">
            <img
              className="photo"
              src={zoroPoster}
              alt="Zoro Poster"
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                height: '350px',
                width: '240px',
              }}
            />
            <p>Zoro Poster</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>&#8377;99</p>
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

export default WallPosters;