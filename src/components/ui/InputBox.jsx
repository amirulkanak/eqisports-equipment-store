const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-clr-dark2/30 dark:border-clr-light/30 bg-transparent placeholder:text-clr-dark2/50 dark:placeholder:text-clr-light/50 px-5 py-3 text-base outline-none focus-visible:shadow-none"
      />
    </div>
  );
};

export default InputBox;
