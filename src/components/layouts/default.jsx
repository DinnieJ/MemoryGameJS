import React from "react";

const Default = ({ children }) => {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
        {children}
    </div>
  );
};

export default Default;
