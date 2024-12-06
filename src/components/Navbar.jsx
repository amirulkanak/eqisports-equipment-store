import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LiaAlignLeftSolid } from 'react-icons/lia';
import { CiDark, CiLight } from 'react-icons/ci';
import useAuth from '../hooks/useAuth';
import { BtnNavLink, Button } from './ui/Button';
import useTheme from '../hooks/useTheme';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  // const user = true;

  return (
    <nav className="dark:bg-clr-darker py-7 dark:border-b dark:border-b-sky-600/30">
      <section className="max-width-wrapper relative flex items-center justify-between py-5 xl:py-0">
        {/* Logo */}
        <Link to={'/'}>
          <h2 className="text-3xl font-bold font-playwrite">
            <span className="text-sky-700 dark:text-sky-500">Equi</span>
            Sports
          </h2>
        </Link>

        <div>
          <button
            onClick={() => setOpen(!open)}
            className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] xl:hidden border border-sky-600/30 shadow-lg`}>
            <LiaAlignLeftSolid className="text-4xl" />
          </button>

          <div
            className={`absolute right-4 z-20 top-full w-full max-w-[250px] rounded-lg bg-sky-500 dark:bg-clr-darker/90 border border-sky-600/30 xl:border-none xl:bg-transparent px-6 py-5 xl:px-0 xl:py-0 shadow xl:static xl:block xl:w-full xl:max-w-full xl:shadow-none ${
              !open && 'hidden'
            } `}>
            {/* Links */}
            <ul className="text-base font-medium flex flex-col xl:flex-row items-center justify-between gap-4">
              <NavLink to={'/'} className="">
                Home
              </NavLink>
              <NavLink to={'/404'}>404</NavLink>
              <NavLink to={'/all-equipment'}>All Sports Equipment</NavLink>
              <NavLink to={'/add-equipment'}>Add Equipment</NavLink>
              <NavLink to={'/my-equipment'}>My Equipment List</NavLink>

              {/* user Pic */}

              {user && (
                <div className="h-[43px] w-[43px] rounded-full bg-sky-600/30">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-full w-full rounded-full object-cover object-center"
                    data-tooltip-id="user-name"
                    data-tooltip-content={user.displayName}
                  />
                  <Tooltip id="user-name" />
                </div>
              )}
              {/* add onClick={logOut} */}
              {user && <Button onClick={logOut}>Logout</Button>}

              {!user && <BtnNavLink to={'/auth/register'}>Register</BtnNavLink>}
              {!user && <BtnNavLink to={'/auth/login'}>Login</BtnNavLink>}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-sky-600/30"
                data-tooltip-id="theme-toggler"
                data-tooltip-content="Dark / Light">
                {theme === 'light' ? (
                  <CiDark className="text-2xl text-clr-darker" />
                ) : (
                  <CiLight className="text-2xl text-clr-light" />
                )}
                <Tooltip id="theme-toggler" />
              </button>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
