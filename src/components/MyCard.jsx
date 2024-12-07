import { Link } from 'react-router-dom';

const MyCard = ({ cardData, handleDelete }) => {
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
        <p className="text-sm mt-2">
          Rating:{' '}
          <span className="font-medium px-2 py-1 bg-gray-100/70 text-lime-900 rounded-md">
            {cardData.rating}
          </span>
        </p>
        <p className="text-sm mt-2">Description: {cardData.description}</p>
        <p className="text-sm mt-2">
          Processing Time:: {cardData.processingTime}
        </p>
        <p className="text-sm mt-2">Customization: </p>
        <ul className="list-disc list-inside">
          {cardData.customization.map((option, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400">
              {option}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold">${cardData.price}</p>
          <div className="space-x-3">
            <Link
              to={`/equipment/update/${cardData._id}`}
              className="px-4 py-2 bg-sky-600/40 rounded hover:bg-sky-400 dark:hover:bg-sky-600 transition">
              Update
            </Link>

            <button
              onClick={() => handleDelete(cardData._id)}
              className="px-4 py-2 bg-rose-600/40 rounded hover:bg-rose-400 dark:hover:bg-rose-600 transition">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
