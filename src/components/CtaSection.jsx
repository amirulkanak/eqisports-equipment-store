import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section class="bg-violet-200/70  dark:bg-gray-800 py-12 my-20">
      <div class="max-width-wrapper text-center">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl">
          Gear Up for Your Next Adventure
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
          Explore our wide range of sports equipment and accessories designed
          for every athlete.
        </p>
        <div class="mt-6">
          <Link
            to={`/all-equipment`}
            class=" text-white bg-gradient-to-r from-rose-300 to-rose-500 font-semibold py-3 px-8 rounded-lg shadow-lg">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
