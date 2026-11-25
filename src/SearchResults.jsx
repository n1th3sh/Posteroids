import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Features from './Features';
import Footer from './Footer';
import ProductCard from './ProductCard';
import { useGetProductsQuery } from './services/productsApi';
import { getProductCategoryName, isProductInCategory } from './utils/product';
import catalog from './data/productCard.json';

const normalize = (value) => String(value || '').toLocaleLowerCase().trim();

function SearchResults() {
  const [activeType, setActiveType] = useState('All products');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const normalizedQuery = normalize(query);
  const { data: apiProducts = [], isLoading, isError, error } = useGetProductsQuery();

  const fallbackProducts = [
    ...(catalog.Wallposters || []).map((product) => ({ ...product, category: 'Wall Posters' })),
    ...(catalog.Polaroids || []).map((product) => ({ ...product, category: 'Polaroids' })),
  ];
  const products = isError ? fallbackProducts : apiProducts;
  const matches = normalizedQuery
    ? products.filter((product) => [
        product.name,
        getProductCategoryName(product),
        product.category?.description,
        product.image,
      ].some((field) => normalize(field).includes(normalizedQuery)))
    : [];
  const visibleMatches = matches.filter((product) => {
    if (activeType === 'Wall posters') return isProductInCategory(product, 'wall posters');
    if (activeType === 'Polaroids') return isProductInCategory(product, 'polaroid');
    return true;
  });

  return (
    <div>
      <main className="search-results-page">
        <div className="search-results-heading">
          <div>
            <p className="search-results-eyebrow">PRODUCT SEARCH</p>
            <h1>
              {query ? <>Results for <span className="search-query-term">{query}</span></> : 'Search products'}
            </h1>
          </div>
          {!!matches.length && <span className="search-results-count">{visibleMatches.length} {visibleMatches.length === 1 ? 'item' : 'items'}</span>}
        </div>
        {isLoading ? (
          <img src="/ekkant-circle-20050_512.gif" alt="Loading products" style={{ width: '100px' }} />
        ) : !normalizedQuery ? (
          <p>Enter a product or category to search.</p>
        ) : matches.length ? (
          <>
            <div className="search-result-filters" role="group" aria-label="Filter search results by product type">
              {['All products', 'Wall posters', 'Polaroids'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`search-filter-chip${activeType === type ? ' is-active' : ''}`}
                  aria-pressed={activeType === type}
                  onClick={() => setActiveType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            {visibleMatches.length ? (
              <div className="search-results-grid">
                {visibleMatches.map((product) => <ProductCard key={`${getProductCategoryName(product)}-${product.id}`} product={product} />)}
              </div>
            ) : (
              <p className="search-empty-state">No {activeType.toLowerCase()} match “{query}”. Choose another filter to see more results.</p>
            )}
          </>
        ) : (
          <p className="search-empty-state">No products found for “{query}”. Try another name or category.</p>
        )}
        {isError && <p className="catalog-fallback-note">
          Could not load products from the backend{error?.status ? ` (${error.status})` : ''}; showing the saved catalog.
        </p>}
      </main>
      <Features />
      <Footer />
    </div>
  );
}

export default SearchResults;
