import { useEffect, useState } from 'react';
import MyCard from '../components/MyCard';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';
import Swal from 'sweetalert2';

const MyEquipment = () => {
  document.title = 'My Equipment | EquiSports';
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
        if (data.data.length === 0) {
          setLoading(false);
        }
      });
  }, [myProducts]);

  // delete equipment
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
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
      {myProducts.length === 0 ? (
        <div className="flex items-center justify-center">
          {loading ? (
            <LoadingSpinner size={3} />
          ) : (
            ' Your List is empty. Please add some equipment'
          )}
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {myProducts.map((card) => (
            <MyCard
              key={card.itemName}
              cardData={card}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MyEquipment;
