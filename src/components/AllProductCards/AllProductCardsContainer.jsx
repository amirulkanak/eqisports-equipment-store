import { useLoaderData } from 'react-router-dom';
import AllProductCard from './AllProductCard';
import LoadingSpinner from '../LoadingSpinner';
import { useState } from 'react';

const AllProductCardsContainer = () => {
  const { data: products } = useLoaderData();
  const [sortedProducts, setSortedProducts] = useState(products);
  const [ascending, setAscending] = useState(true);

  // Function to sort products by price
  const sortProducts = () => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (ascending) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
    setAscending(!ascending);
  };

  return (
    <div data-aos="fade-in" className="max-width-wrapper">
      {/* Sort button */}
      <button
        onClick={sortProducts}
        className="bg-sky-600/40 rounded hover:bg-sky-400 dark:bg-sky-800/40 dark:hover:bg-sky-800 transition px-4 py-2 mb-4">
        Sort by Price ({ascending ? 'Ascending' : 'Descending'})
      </button>

      {sortedProducts.length === 0 ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={3} />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {sortedProducts.map((card) => (
            <AllProductCard key={card._id} cardData={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProductCardsContainer;
