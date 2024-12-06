import SwiperComponent from './swiperSlider/SwiperComponent';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  document.title = 'Home | EquiSports';

  return (
    <header className="pb-16 mt-16">
      <section className="max-width-wrapper">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-center text-6xl sm:text-[4.5rem] leading-[5rem] font-bold">
            <Fade delay={1e3} cascade damping={1e-1}>
              Gear Up for Victory with
            </Fade>
            <br />
            <Fade delay={2e3} cascade damping={1e-1}>
              EquiSports!
            </Fade>
          </h1>
          <p
            data-aos="fade-in"
            className="max-w-xl text-pretty lg:text-md text-center">
            From beginners to pros, we’ve got the gear to fuel your passion.
            Discover top-quality equipment, apparel, and accessories for every
            sport. Whether you’re hitting the field, court, or trail, we help
            you perform at your best.
          </p>
          <p className="text-sky-800">Shop Now and Elevate Your Game!</p>
        </div>
      </section>

      <section data-aos="fade-up" className="max-width-wrapper mt-12">
        <div className="rounded-xl overflow-clip">
          <SwiperComponent />
        </div>
      </section>
    </header>
  );
};

export default Header;
