import React, { useState } from 'react';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import PolaroidList from './PolaroidList';
import PolaroidsBanner from './banner/polaroids banner.png';

function Polaroids() {
  const [sortBy, setSortBy] = useState('Popular');

  return (
    <div>
      <Header />

      <div>
        <img src={PolaroidsBanner} alt="Polaroids Banner" className="banner-page" />
      </div>

      <div className="filter-bar">
        <div>
          <label className="filter-label">Showing 1-16 of 248 products</label>
        </div>
        <div>
          <label className="filter-label">Sort by:</label>{' '}
          <select className="category-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Popular">Popular</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>

      <div className="wallp">
        <PolaroidList sortBy={sortBy} />
      </div>

      <Features />

      <p className="footer-divider-bar"><br /></p>

      <Footer />
    </div>
  );
}

export default Polaroids;