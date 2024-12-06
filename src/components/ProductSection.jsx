import ProductCardsContainer from './ProductCards/ProductCardsContainer';
import { Button } from './ui/Button';

const ProductSection = () => {
  return (
    <section data-aos="fade-up" className="max-width-wrapper mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Check Out Our Latest Products!</h2>
        <p className="m-4">Grab your favorite gear before they're gone!</p>
      </div>

      {/* Product Cards */}
      <ProductCardsContainer />
    </section>
  );
};

export default ProductSection;
