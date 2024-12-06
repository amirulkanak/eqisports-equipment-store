import { Link } from 'react-router-dom';

const ProductCard = ({ cardData }) => {
  return (
    <div className="max-w-sm w-full bg-sky-100 dark:bg-clr-dark2 shadow-lg rounded-lg overflow-hidden">
      <img
        src={cardData.imageURL}
        alt={cardData.itemName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{cardData.itemName}</h2>
        <p className="text-sm mt-1">
          Category: <span className="font-medium">{cardData.categoryName}</span>
        </p>
        <p className="text-sm mt-2">
          Stock:{' '}
          <span className="font-medium px-2 py-1 bg-gray-100/70 text-lime-900 rounded-md">
            {cardData.stockStatus}
          </span>
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold">${cardData.price}</p>
          <Link
            to={`/service/${cardData._id}`}
            className="px-4 py-2 bg-sky-600/40 rounded hover:bg-sky-400 dark:hover:bg-sky-600 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
