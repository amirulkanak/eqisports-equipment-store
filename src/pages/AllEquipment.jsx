import { useLoaderData } from 'react-router-dom';
import ProductTable from '../components/ProductTable/ProductTable';

const AllEquipment = () => {
  document.title = 'All Equipment | EquiSports';
  const { data: products } = useLoaderData();
  return (
    <div data-aos="fade-in" className="max-width-wrapper mb-20">
      <h2 className="text-3xl font-semibold mt-20 text-center">
        All Equipment List
      </h2>
      <ProductTable products={products} />
    </div>
  );
};

export default AllEquipment;
