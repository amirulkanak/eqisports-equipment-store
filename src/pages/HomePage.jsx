import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';
import Header from './../components/Header';

const HomePage = () => {
  document.title = 'Home | EquiSports';
  return (
    <>
      <Header />
      <main>
        <ProductSection />
        <CategoriesSection />
      </main>
    </>
  );
};

export default HomePage;
