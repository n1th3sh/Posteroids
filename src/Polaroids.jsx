import React, { useState } from 'react';
import Features from './Features';
import Footer from './Footer';
import PolaroidList from './PolaroidList';
import PolaroidsBanner from './assets/banner/polaroids banner.png';
import SortDropdown from './SortDropdown';

function Polaroids() {
  const [sortBy, setSortBy] = useState('Popular');

  return (
    <div>
      <div>
        <img src={PolaroidsBanner} alt="Polaroids Banner" className="banner-page" />
      </div>

      <div className="filter-bar">
        <div className="filter-heading">
          <span className="filter-eyebrow">POLAROID COLLECTION</span>
          <span className="filter-title">Keep a little moment</span>
        </div>
        <div className="sort-control">
          <span className="sort-control-label">Sort by</span>
          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
            label="Sort polaroids"
            options={[
              { value: 'Popular', label: 'Popular' },
              { value: 'Top Rated', label: 'Top rated' },
              { value: 'Newest', label: 'Newest first' },
            ]}
          />
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
