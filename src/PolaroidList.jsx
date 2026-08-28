import ProductCard from "./ProductCard";
import useFetch from "./useFetch";

function PolaroidList({sortBy='Popular'}){
    

    const [polaroids, error]=useFetch('http://localhost:3000/Polaroids');
    

    if(!polaroids){
    return(
      <>
        {!error && (<img src="/ekkant-circle-20050_512.gif" alt="Loading" style={{width:"100px"}} />)}
        {error && <h3>{error}</h3>}
      </>
    )
  }

    const sortedpolaroids=[...polaroids].sort((a,b)=>{
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
            {sortedpolaroids.map(
            (polaroid)=> 
            <ProductCard
              key={polaroid.id}
              id={polaroid.id}
              type="Polaroids"
              image={polaroid.image}
              picName={polaroid.name}
              Price={polaroid.price}
              rating={polaroid.rating}
              purchases={polaroid.purchases}
              dateAdded={polaroid.dateAdded}
            />
            )}
        </>
    )
}

export default PolaroidList;