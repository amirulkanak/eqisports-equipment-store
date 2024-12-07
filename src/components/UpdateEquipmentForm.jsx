import { useState } from 'react';
import Swal from 'sweetalert2';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const UpdateEquipmentForm = ({ userEmail, userName, cardData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    imageURL: cardData.imageURL,
    itemName: cardData.itemName,
    categoryName: cardData.categoryName,
    description: cardData.description,
    price: cardData.price,
    rating: cardData.rating,
    customization: cardData.customization.join(', '),
    processingTime: cardData.processingTime,
    stockStatus: cardData.stockStatus,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert the customization string to an array
    const finalData = {
      ...formData,
      customization: formData.customization
        .split(',')
        .map((item) => item.trim()),
      price: parseFloat(formData.price),
      rating: parseFloat(formData.rating),
      stockStatus: parseFloat(formData.stockStatus),
      userEmail,
      userName,
    };

    // Send the final data to the server
    fetch(
      `https://b10-a10-server-side-amirulkanak.vercel.app/equipment/update/${cardData._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: 'Success!',
            text: `${data.message}. Check your updated equipment in My Equipment.`,
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
              setLoading(false);
              navigate('/my-equipment');
            }
          });
        } else {
          setLoading(false);
          Swal.fire({
            title: 'Error!',
            text: `${data.message}. Please try again.`,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-sky-600/30 dark:bg-clr-darker shadow-lg rounded-lg p-12 w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-8">Add Equipment</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-md font-medium">Image URL:</label>
            <input
              type="text"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div>
            <label className="text-md font-medium">Item Name:</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              placeholder="Enter Product Name"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div>
            <label className="text-md font-medium">Category Name:</label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              placeholder="Enter Category Name"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div>
            <label className="text-md font-medium">Price (USD):</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div>
            <label className="text-md font-medium">Rating (0-5):</label>
            <input
              type="number"
              step="0.1"
              max="5"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter a number between 0 and 5"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div>
            <label className="text-md font-medium ">
              Stock Status (Quantity):
            </label>
            <input
              type="number"
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              placeholder="Enter Product Quantity"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-md font-medium">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Product Description"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required></textarea>
          </div>

          <div>
            <label className="text-md font-medium">
              Customization (separated by commas):
            </label>
            <input
              type="text"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              placeholder="Enter Customization Options"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
            />
          </div>

          <div>
            <label className="text-md font-medium">Processing Time:</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              placeholder="Enter Processing Time"
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
              required
            />
          </div>

          <div>
            <label className="text-md font-medium">User Name:(read only)</label>
            <input
              type="text"
              value={userName}
              readOnly
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
            />
          </div>

          <div>
            <label className="text-md font-medium">
              User Email:(read only)
            </label>
            <input
              type="email"
              value={userEmail}
              readOnly
              className="mt-1 w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 text-sky-100 py-2 px-4 flex items-center justify-center rounded-md hover:bg-sky-700">
            {loading ? <LoadingSpinner size={1} /> : `Update Equipment`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipmentForm;
