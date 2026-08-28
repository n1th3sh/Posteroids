import ProductCard from './ProductCard';
import useFetch from './useFetch';


function WallPosterList({sortBy = 'Popular'}){
    
  const [wallposters,error ] = useFetch('http://localhost:3000/Wallposters');

  if(!wallposters){
    return(
       <>
          {!error && (<img src="/ekkant-circle-20050_512.gif" alt="Loading" style={{width:"100px"}}/>)}
          {error && <h3>{error}</h3>}
       </> 
    )
  }
  
  const sortedPosters=[...wallposters].sort((a,b)=>{
    if (sortBy === 'Popular') {
      return b.purchases - a.purchases;
    }
    if (sortBy === 'Top Rated') {
      return b.rating - a.rating;
    }
    if (sortBy === 'Newest') {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
      return 0;
  });
    return(
        <>
            {sortedPosters.map(
            (posters)=> 
            <ProductCard
              key={posters.id}
              id={posters.id}
              type="Wallposters"
              image={posters.image}
              picName={posters.name}
              Price={posters.price}
              rating={posters.rating}
              purchases={posters.purchases}
              dateAdded={posters.dateAdded}
            />
            )}
        </>
    )
}

export default WallPosterList;