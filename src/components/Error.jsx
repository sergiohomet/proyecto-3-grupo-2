const Error = ({ children }) => {
  return (
    <>
      <div className="bg-red-600 text-white text-center font-bold">
        {children}
      </div>
    </>
  );
};

export default Error;
