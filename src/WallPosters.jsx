import React, { useState } from 'react';
import Features from './Features';
import Footer from './Footer';

import WallPostersBanner from './assets/banner/wall poster banner.png';
import WallPosterList from './WallPosterList';
import SortDropdown from './SortDropdown';

function WallPosters() {
  const [sortBy, setSortBy] = useState('Popular');

  return (
    <div>
      <div>
        <img src={WallPostersBanner} alt="Wall Poster Banner" className="banner-page" />
      </div>

      <div className="filter-bar">
        <div className="filter-heading">
          <span className="filter-eyebrow">WALL POSTER COLLECTION</span>
          <span className="filter-title">Find your next favorite</span>
        </div>
        <div className="sort-control">
          <span className="sort-control-label">Sort by</span>
          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
            label="Sort wall posters"
            options={[
              { value: 'Popular', label: 'Popular' },
              { value: 'Top Rated', label: 'Top rated' },
              { value: 'Newest', label: 'Newest first' },
            ]}
          />
        </div>
      </div>

      <div className="wallp">
        <WallPosterList sortBy={sortBy} />
      </div>

      <Features />

      <p className="footer-divider-bar"><br /></p>

      <Footer />
    </div>
  );
}

export default WallPosters;
