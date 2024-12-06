import { BtnLink } from '../ui/Button';

export const ProductDetailsCard = ({ product }) => {
  const {
    imageURL,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
  } = product;
  return (
    <div className="mt-12 flex justify-center items-center">
      <div className="bg-sky-200 dark:bg-clr-darker rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={imageURL}
              alt={itemName}
              className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
            />
          </div>
          {/* Details */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold">{itemName}</h2>
            <p className="text-sm text-gray-500 dark:text-clr-light/70 mb-4">
              Category: {categoryName}
            </p>
            <p className="dark:text-gray-300 mb-4">{description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-2">
              ${price.toFixed(2)}
            </p>
            <p className="text-yellow-800 dark:text-yellow-500 mb-4">
              Rating: {rating} ★
            </p>

            {/* Customization */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Customization Options:</h3>
              <ul className="list-disc list-inside">
                {customization.map((option, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Processing Time: {processingTime}
            </p>
            <p
              className={`mb-4 ${
                stockStatus > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
              Stock:{' '}
              {stockStatus > 0 ? `${stockStatus} available` : 'Out of stock'}
            </p>

            <div className="border-t border-t-sky-600/30 border-gray-200 pt-4 mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sold by:
              </p>
              <p className="text-gray-800 dark:text-gray-300 font-semibold">
                {userName}
              </p>
              <p className="text-blue-500">{userEmail}</p>
            </div>

            <BtnLink to={'/all-equipment'}>Go to All Equipment</BtnLink>
          </div>
        </div>
      </div>
    </div>
  );
};
