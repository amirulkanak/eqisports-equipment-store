import SwiperComponent from './swiperSlider/SwiperComponent';
const Header = () => {
  return (
    <header className="pb-16">
      <section className="max-width-wrapper"></section>

      <section data-aos="fade-up" className="max-width-wrapper mt-12">
        <div className="rounded-xl overflow-clip">
          <SwiperComponent />
        </div>
      </section>
    </header>
  );
};

export default Header;
