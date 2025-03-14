import { useState } from 'react';
import { validateEmail, validatePasswordForSignUp } from '../utils/validator';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import PasswordInput from './../components/ui/PasswordInput';
import InputBox from './../components/ui/InputBox';
import useAuth from './../hooks/useAuth';
import notify from '../utils/notify';
import LoadingSpinner from '../components/LoadingSpinner';

const RegisterPage = () => {
  document.title = 'Sign Up | EquiSports';
  window.scrollTo(0, 0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [gloading, setGLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, signUp, updateUserProfile, loginWithGooglePopup } =
    useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    const formData = Object.fromEntries(new FormData(event.target));

    if (!formData.fullName) {
      setError('Full name is required.');
      setLoading(false);
      return;
    }

    if (!formData.photoUrl) {
      setError('Photo url is required.');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email. Please check email address.');
      setLoading(false);
      return;
    }

    if (!validatePasswordForSignUp(formData.password)) {
      setError(
        'Password must includes 6 characters, an uppercase and a lowercase letters.'
      );
      setLoading(false);
      return;
    }

    // Sign up the user
    signUp(formData.email, formData.password)
      .then((result) => {
        setUser(result.user);
        // update user profile
        updateUserProfile(formData.fullName, formData.photoUrl);
        setLoading(false);
        notify.success(`Sign up Successful`);
        // clear input fields after submit
        event.target.reset();
        navigate('/');
      })
      .catch((error) => {
        notify.error('Error');
        setLoading(false);
        setError(
          'Failed to login with Google. Please try again. ' + error.message
        );
      });
  };

  // Login with Google
  const handleLoginWithGoogle = () => {
    setGLoading(true);
    loginWithGooglePopup()
      .then((result) => {
        setUser(result.user);
        setGLoading(false);
        notify.success(`Welcome ${result.user.displayName}`);
        navigate('/');
      })
      .catch((error) => {
        setGLoading(false);
        setError(
          'Failed to login with Google. Please try again. ' + error.message
        );
      });
  };

  return (
    <section data-aos="fade-in" className="py-20 lg:py-[120px]">
      <div className="max-width-wrapper">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-sky-600/30 dark:bg-clr-darker shadow-xl px-10 py-16 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <h2 className="text-3xl font-light">Sign Up</h2>
                <p className="text-base mt-2">Create an account to continue</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <InputBox type="text" name="fullName" placeholder="Full name" />
                <InputBox type="text" name="photoUrl" placeholder="Photo URL" />
                <InputBox type="email" name="email" placeholder="Email" />

                <PasswordInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                {/* error message */}
                <span>
                  {error && <div className="text-red-500 mb-1">{error}</div>}
                </span>

                <div className="mb-10">
                  {loading ? (
                    <button
                      disabled={loading}
                      className="flex items-center justify-center w-full rounded-md px-5 py-3 text-base border-2 border-sky-600/50 shadow-lg bg-sky-400/30 dark:bg-transparent dark:hover:bg-sky-600/30 hover:bg-sky-500 text-sky-800 dark:text-sky-500 hover:text-white dark:hover:text-clr-light duration-300">
                      <LoadingSpinner size={1} />
                    </button>
                  ) : (
                    <input
                      type="submit"
                      value="Sign Up"
                      className="w-full cursor-pointer rounded-md px-5 py-3 text-base border-2 border-sky-600/50 shadow-lg bg-sky-400/30 dark:bg-transparent dark:hover:bg-sky-600/30 hover:bg-sky-500 text-sky-800 dark:text-sky-500 hover:text-white dark:hover:text-clr-light duration-300"
                    />
                  )}
                </div>
              </form>

              <div className="my-6 text-base h-[1px] bg-sky-600/30"></div>

              <p className="text-base text-body-color">
                <span className="pr-0.5">Already have an account? </span>
                <Link
                  to={'/auth/login'}
                  className="hover:underline text-sky-600">
                  Login
                </Link>
              </p>

              <div className="my-6 text-base h-[1px] bg-sky-600/30"></div>

              <button
                onClick={handleLoginWithGoogle}
                disabled={gloading}
                className="w-full flex items-center justify-center cursor-pointer rounded-md border-2 border-sky-600/50 hover:bg-sky-600/30 px-5 py-3 text-base font-medium text-blue-600/80 dark:text-clr-light/70">
                {gloading ? (
                  <LoadingSpinner size={1} />
                ) : (
                  <span>
                    <FcGoogle className="text-2xl inline mr-2" />
                    Login with Google
                  </span>
                )}
              </button>

              <div>
                <span className="absolute right-0 top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    width="201"
                    height="100"
                    preserveAspectRatio="none"
                    viewBox="0 0 201 100">
                    <g mask='url("#SvgjsMask1041")' fill="none">
                      <path
                        d="M201.12 45.41C180.5 46.19 166.08 80.34 125.89 79.41 85.7 78.48 78.65-2.08 50.66-11.28"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M224.23 70.85C204.88 70.04 187.7 43.11 154.12 37.85 120.55 32.59 133.44-8.46 119.07-15.29"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M210.46 32.52C194.02 32.46 178.18 20.02 145.9 20.02 113.62 20.02 114.73 32.81 81.35 32.52 47.96 32.23 36.56-11.77 16.79-14.12"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M233.32 24.94C215.12 25.38 191.85 51.23 165.31 50.94 138.76 50.65 145.67 3.09 131.3-4.53"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M239.4 82.09C222.72 82.03 206.63 69.59 173.85 69.59 141.08 69.59 145.6 84.39 108.31 82.09 71.02 79.79 67.82 7.02 42.76-2.16"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                    </g>
                    <defs>
                      <mask id="SvgjsMask1041">
                        <rect width="201" height="100" fill="#ffffff"></rect>
                      </mask>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.dev/svgjs"
                    width="80"
                    height="50"
                    preserveAspectRatio="none"
                    viewBox="0 0 80 50">
                    <g mask='url("#SvgjsMask1081")' fill="none">
                      <path
                        d="M-15.01 8.13C-8.23 8.17-1.82 14.38 11.38 14.38 24.57 14.38 21.13 5.73 37.76 8.13 54.39 10.53 52.51 48.84 64.15 56.01"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M-9.33 32.28C2.63 31.64 16.05 9.81 33.24 10.28 50.43 10.75 44.39 49.65 54.52 57.85"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M-11.87 45.99C-3.6 45.75 3.17 33.43 18.79 33.49 34.4 33.55 39.74 56.5 49.44 57.93"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M-6.28 6.79C4.23 7.37 13.08 23.39 31.04 26.29 49 29.19 42.2 49.97 49.7 53.29"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                      <path
                        d="M-3.38 12.39C3.77 13.04 4.28 24.17 20.79 27.89 37.29 31.61 35.61 56.18 44.95 59.75"
                        stroke="rgba(51,121,194,0.58)"
                        strokeWidth="2"></path>
                    </g>
                    <defs>
                      <mask id="SvgjsMask1081">
                        <rect width="80" height="50" fill="#ffffff"></rect>
                      </mask>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
