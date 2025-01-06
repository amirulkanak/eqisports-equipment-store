import { useLoaderData } from 'react-router-dom';
import AllProductCard from './AllProductCard';
import LoadingSpinner from '../LoadingSpinner';

const AllProductCardsContainer = () => {
  const { data: products } = useLoaderData();

  return (
    <div data-aos="fade-in" className="max-width-wrapper">
      {products.length === 0 ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={3} />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {products.map((card) => (
            <AllProductCard key={card._id} cardData={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProductCardsContainer;
