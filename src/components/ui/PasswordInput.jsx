import { useState } from 'react';
import { HiEyeOff } from 'react-icons/hi';
import { HiEye } from 'react-icons/hi2';

const PasswordInput = ({ type, placeholder, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-6 relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-4 cursor-pointer">
        {showPassword ? (
          <HiEyeOff className="text-minsk-600 text-xl" />
        ) : (
          <HiEye className="text-minsk-600 text-xl" />
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
