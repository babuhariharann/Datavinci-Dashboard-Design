import React from "react";

const SalesList = ({
  logo,
  logoBg,
  heading,
  category,
  arrowUpIcon,
  percentage,
  bgColor,
  textColor,
}) => {
  return (
    <>
      <div
        className={`relative flex items-center justify-around h-32 min-w-fit ${bgColor} my-1 rounded-2xl duration-700 transition-all ease-in-out hover:scale-105`}
      >
        <div
          className={`${logoBg} w-8 h-8 rounded-full flex justify-center items-center`}
        >
          <p className="text-xl text-gray-600">{logo}</p>
        </div>
        <div>
          <h1 className="text-gray-700 font-medium text-lg">{heading}</h1>
          <p className="text-gray-500">{category}</p>
        </div>
        <div className={`flex items-center gap-3 ${logoBg} rounded-md px-2 `}>
          <p>{arrowUpIcon}</p>
          <span className={``}>{percentage}</span>
        </div>
      </div>
    </>
  );
};

export default SalesList;
