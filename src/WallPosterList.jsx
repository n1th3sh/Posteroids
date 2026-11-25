import ProductCard from './ProductCard';
import { useGetProductsQuery } from './services/productsApi';
import { isProductInCategory } from './utils/product';
import catalog from './data/productCard.json';

function WallPosterList({ sortBy = 'Popular' }) {
  const { data: apiProducts = [], isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <img src="/ekkant-circle-20050_512.gif" alt="Loading products" style={{ width: '100px' }} />;
  }
  // Keep the shop usable when Spring Boot is stopped. The API remains the
  // source of truth whenever it responds; local JSON is only an offline fallback.
  const products = isError
    ? (catalog.Wallposters || []).map((product) => ({ ...product, category: 'Wall Posters' }))
    : apiProducts;

  const wallPosters = products.filter((product) => isProductInCategory(product, 'wall posters'));
  const sortedPosters = [...wallPosters].sort((a, b) => {
    if (sortBy === 'Popular') return (b.purchases || 0) - (a.purchases || 0);
    if (sortBy === 'Top Rated') return (b.rating || 0) - (a.rating || 0);
    if (sortBy === 'Newest') return new Date(b.dateAdded || b.createdAt) - new Date(a.dateAdded || a.createdAt);
    return 0;
  });

  if (sortedPosters.length === 0) return <h3>No wall posters were returned by the backend.</h3>;
  return <>
    {isError && <p className="catalog-fallback-note">
      Could not load products from the backend{error?.status ? ` (${error.status})` : ''}; showing the saved catalog.
    </p>}
    {sortedPosters.map((product) => (
      <ProductCard key={String(product.id)} product={product} />
    ))}
  </>;
}

export default WallPosterList;
