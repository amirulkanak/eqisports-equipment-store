import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';
import Swal from 'sweetalert2';
import ProductTable from './../components/ProductTable/ProductTable';

const MyEquipment = () => {
  document.title = 'My Equipment | EquiSports';
  window.scrollTo(0, 0);
  const { user } = useAuth();
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://b10-a10-server-side-amirulkanak.vercel.app/equipment/user/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyProducts(data.data);
        setLoading(false);
      });
  }, [user.email]);

  // delete equipment
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Want to delete?',
      text: 'The equipment will be deleted permanently from your list',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(
          `https://b10-a10-server-side-amirulkanak.vercel.app/equipment/delete/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: 'Deleted!',
                text: `${data.message}`,
                icon: 'success',
              });
              // filter out the deleted item
              const newProducts = myProducts.filter(
                (product) => product._id !== id
              );
              setMyProducts(newProducts);
              setLoading(false);
            }
          });
      }
    });
  };

  return (
    <section className="max-width-wrapper my-20">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        My Equipment List
      </h2>
      {loading && (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={3} />
        </div>
      )}
      {!loading && myProducts.length === 0 && (
        <div className="flex items-center justify-center">
          Your List is empty. Please add some equipment
        </div>
      )}

      {!loading && myProducts.length > 0 && (
        <ProductTable products={myProducts} handleDelete={handleDelete} />
      )}
    </section>
  );
};

export default MyEquipment;
