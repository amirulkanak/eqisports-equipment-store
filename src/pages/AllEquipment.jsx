import AllProductCardsContainer from '../components/AllProductCards/AllProductCardsContainer';

const AllEquipment = () => {
  document.title = 'All Equipment | EquiSports';
  window.scrollTo(0, 0);
  return (
    <section className="max-width-wrapper mb-20">
      <div data-aos="fade-in" className="mb-12">
        <h2 className="text-3xl font-semibold mt-20 text-center">
          All Equipment List
        </h2>
      </div>

      {/* Product Cards */}
      <AllProductCardsContainer />
    </section>
  );
};

export default AllEquipment;
