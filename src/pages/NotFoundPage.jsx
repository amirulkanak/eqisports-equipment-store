import { Link } from 'react-router-dom';
import { BtnLink } from '../components/ui/Button';

const NotFoundPage = () => {
  document.title = '404 | EquiSports';
  return (
    <section className="max-width-wrapper">
      <div className="flex flex-col gap-6 items-center justify-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="text-red-700 w-20 h-20">
          <path d="M12 20v-7m0 7c2.942 0 5.46-1.945 6.496-4.7M12 20c-2.942 0-5.46-1.945-6.496-4.7M14.829 7A3 3 0 1 0 9.17 7m5.66 0h1.93c.472.47.885 1.01 1.222 1.604M14.83 7H9.171m0 0H7.24a7.455 7.455 0 0 0-1.223 1.604M21 3v2.54a3 3 0 0 1-2.412 2.942l-.606.122M3 3v2.54a3 3 0 0 0 2.412 2.942l.606.122M22 21v-2.54a3 3 0 0 0-2.412-2.942l-1.092-.219M2 21v-2.54a3 3 0 0 1 2.412-2.942l1.092-.219m12.992 0A7.95 7.95 0 0 0 19 12.5a7.87 7.87 0 0 0-1.018-3.896M5.504 15.299A7.948 7.948 0 0 1 5 12.5c0-1.427.372-2.76 1.018-3.896"></path>
        </svg>
        <p className="text-3xl mb-4">Page Not Found</p>
        <BtnLink to="/">Home</BtnLink>
      </div>
    </section>
  );
};

export default NotFoundPage;
