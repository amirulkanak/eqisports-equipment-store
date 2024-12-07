import CategoriesSection from '../components/CategoriesSection';
import CtaSection from '../components/CtaSection';
import ProductSection from '../components/ProductSection';
import Testimonials from '../components/Testimonials';
import Header from './../components/Header';

const HomePage = () => {
  document.title = 'Home | EquiSports';
  return (
    <>
      <Header />
      <main>
        <ProductSection />
        <CategoriesSection />
        <Testimonials />
        <CtaSection />
      </main>
    </>
  );
};

export default HomePage;
