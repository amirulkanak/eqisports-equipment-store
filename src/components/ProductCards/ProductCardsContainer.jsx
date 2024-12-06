import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import LoadingSpinner from '../LoadingSpinner';
import { useEffect, useState } from 'react';

const ProductCardsContainer = () => {
  const { data: cardsData } = useLoaderData();
  console.log(cardsData);

  const [randomCards, setRandomCards] = useState([]);

  // Get 6 random cards
  useEffect(() => {
    if (Array.isArray(cardsData)) {
      const getRandomCards = (array, count) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };

      // Get 6 random cards
      setRandomCards(getRandomCards(cardsData, 6));
    }
  }, [cardsData]);

  return (
    <div data-aos="fade-in" delay="500" className="max-width-wrapper">
      {randomCards.length === 0 ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={3} />
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {randomCards.map((card) => (
            <ProductCard key={card.itemName} cardData={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCardsContainer;
