import { Link, NavLink } from 'react-router-dom';

export const Button = ({ children, onClick }) => {
  return (
    <div class="bg-transparent items-center justify-center flex border-2 border-sky-600 shadow-lg hover:bg-sky-500 text-sky-800 dark:text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button onClick={onClick} class="px-5 py-2">
        {children}
      </button>
    </div>
  );
};

export const BtnLink = ({ children, to }) => {
  return (
    <div class="bg-transparent items-center justify-center flex border-2 border-sky-600 shadow-lg hover:bg-sky-500 text-sky-800 dark:text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button class="px-5 py-2">
        <Link to={to}>{children}</Link>
      </button>
    </div>
  );
};

export const BtnNavLink = ({ children, to }) => {
  return (
    <div class="bg-transparent items-center justify-center flex border-2 border-sky-600 shadow-lg hover:bg-sky-500 text-sky-800 dark:text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button class="px-5 py-2">
        <NavLink to={to}>{children}</NavLink>
      </button>
    </div>
  );
};
