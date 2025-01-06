import { useLoaderData } from 'react-router-dom';
import { ProductDetailsCard } from '../components/ProductDetailsCard/ProductDetailsCard';

const EquipmentDetails = () => {
  document.title = 'Equipment Details | EquiSports';
  window.scrollTo(0, 0);
  const { data: product } = useLoaderData();

  return (
    <section className="max-width-wrapper mb-20">
      <h2 className="text-3xl font-semibold mt-20 text-center">
        Equipment Details
      </h2>
      <ProductDetailsCard product={product} />
    </section>
  );
};

export default EquipmentDetails;
