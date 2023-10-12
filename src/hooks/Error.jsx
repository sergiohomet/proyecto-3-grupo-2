import React from 'react'

const Error = ({ children }) => {
  return (
    <>
      <div className="bg-red-600 text-white text-center font-bold mt-0 w-100 p-0">
        {children}
      </div>
    </>
  );
};

export default Error;
