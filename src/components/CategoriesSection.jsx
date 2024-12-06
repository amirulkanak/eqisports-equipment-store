import {
  MdSportsCricket,
  MdOutlineSportsSoccer,
  MdOutlineSportsBaseball,
  MdSportsBasketball,
} from 'react-icons/md';
import { GiHockey, GiTennisRacket } from 'react-icons/gi';

const CategoriesSection = () => {
  return (
    <section data-aos="fade-up" className="max-width-wrapper mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Trending Categories</h2>
        <p className="m-4">
          Browse through our most popular categories and find what you need!
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-sky-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdSportsCricket className="text-5xl text-sky-500 dark:text-sky-300" />
            <h3 className="text-2xl font-semibold">Cricket</h3>
            <p className="mt-2">
              Get the best cricket gear for your next match or practice.
            </p>
          </div>
          <div className="bg-sky-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdOutlineSportsSoccer className="text-5xl text-sky-500 dark:text-sky-300" />
            <h3 className="text-2xl font-semibold">Soccer</h3>
            <p className="mt-2">
              Find all the gear you need to play the beautiful game.
            </p>
          </div>
          <div className="bg-sky-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdSportsBasketball className="text-5xl text-sky-500 dark:text-sky-300" />
            <h3 className="text-2xl font-semibold">Basketball</h3>
            <p className="mt-2">
              Get the best basketballs, hoops, and gear for your next game.
            </p>
          </div>
          <div className="bg-sky-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <MdOutlineSportsBaseball className="text-5xl text-sky-500 dark:text-sky-300" />
            <h3 className="text-2xl font-semibold">Baseball</h3>
            <p className="mt-2">
              Find the best baseball gear for your next game or practice.
            </p>
          </div>
          <div className="bg-sky-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <GiHockey className="text-5xl text-sky-500 dark:text-sky-300" />
            <h3 className="text-2xl font-semibold">Hockey</h3>
            <p className="mt-2">
              Get the best hockey gear for your next match or practice.
            </p>
          </div>
          <div className="bg-sky-100 dark:bg-clr-darker shadow-lg rounded-lg p-5">
            <GiTennisRacket className="text-5xl text-sky-500 dark:text-sky-300" />
            <h3 className="text-2xl font-semibold">Tennis</h3>
            <p className="mt-2">
              Find the best Tennis rackets, balls, and gear for your next game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
