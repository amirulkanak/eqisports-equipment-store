import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductTable = ({ products }) => {
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
    <div className="mt-20">
      {/* Sort button */}
      <button
        onClick={sortProducts}
        className="bg-sky-900/40 rounded hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-800 transition px-4 py-2 mb-4">
        Sort by Price ({ascending ? 'Ascending' : 'Descending'})
      </button>

      {/* Table */}
      <table className="min-w-full bg-sky-100 dark:bg-clr-dark2 border border-sky-600/30 shadow-md rounded-lg overflow-x-auto">
        <thead>
          <tr className="bg-sky-200 dark:bg-clr-darker">
            <th className="py-4 px-6 text-left">Name</th>
            <th className="py-4 px-6 text-left hidden md:table-cell">
              Category
            </th>
            <th className="py-4 px-6 text-left">Price</th>
            <th className="py-4 px-6 text-left hidden lg:table-cell">
              Ratings
            </th>
            <th className="py-4 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product._id} className="border-t border-sky-600/30">
              <td className="py-4 px-6">{product.itemName}</td>
              <td className="py-4 px-6 hidden md:table-cell">
                {product.categoryName}
              </td>
              <td className="py-4 px-6">${product.price.toFixed(2)}</td>
              <td className="py-4 px-6 hidden lg:table-cell">
                {product.rating}
              </td>
              <td className="py-4 px-6">
                <Link
                  className="px-4 py-2 bg-sky-900/40 rounded hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-800 transition"
                  onClick={() =>
                    alert(`Viewing details of ${product.itemName}`)
                  }>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
