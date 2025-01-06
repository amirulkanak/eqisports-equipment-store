import { Link, NavLink } from 'react-router-dom';

export const Button = ({ children, onClick }) => {
  return (
    <div className="bg-transparent items-center justify-center flex border-2 border-sky-600 shadow-lg hover:bg-sky-500 text-sky-800 dark:text-sky-500 dark:hover:text-clr-light hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button onClick={onClick} className="px-5 py-2">
        {children}
      </button>
    </div>
  );
};

export const BtnLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="bg-transparent items-center justify-center flex border-2 border-sky-600 shadow-lg hover:bg-sky-500 text-sky-800 dark:text-sky-500 dark:hover:text-clr-light hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button className="px-5 py-2">{children}</button>
    </Link>
  );
};

export const BtnNavLink = ({ children, to, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className="bg-transparent items-center justify-center flex border-2 border-sky-600 shadow-lg hover:bg-sky-500 text-sky-800 dark:text-sky-500 dark:hover:text-clr-light hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button className="px-5 py-2">{children}</button>
    </NavLink>
  );
};
