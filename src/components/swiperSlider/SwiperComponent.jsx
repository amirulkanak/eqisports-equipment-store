import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slideImage1 from '../../assets/images/banner1.jpg';
import slideImage2 from '../../assets/images/banner2.jpg';
import slideImage3 from '../../assets/images/banner3.jpg';
import slideImage4 from '../../assets/images/banner4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={false}>
      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-clr-darker bg-opacity-50">
            <div className="ml-20 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl lg:text-5xl">Soccer Gear</h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Go After Your Goals
              </p>
            </div>
          </div>
          <img
            src={slideImage1}
            alt="Slide 1"
            className="object-center object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-clr-darker bg-opacity-50">
            <div className="ml-20 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl lg:text-5xl">Cricket Gear</h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Score for Your Team
              </p>
            </div>
          </div>
          <img
            src={slideImage2}
            alt="Slide 2"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-clr-darker bg-opacity-50">
            <div className="ml-20 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl lg:text-5xl">Tennis Gear</h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Serve Your Best
              </p>
            </div>
          </div>
          <img
            src={slideImage3}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute inset-0 flex flex-col items-end justify-end bg-clr-darker bg-opacity-30">
            <div className="mr-20 mb-6 flex flex-col items-center justify-center">
              <h2 className="text-white text-3xl lg:text-5xl">
                Basketball Gear
              </h2>
              <p className="mt-2 lg:mt-4 text-md lg:text-xl text-white">
                Dunk Like a Pro
              </p>
            </div>
          </div>
          <img
            src={slideImage4}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
