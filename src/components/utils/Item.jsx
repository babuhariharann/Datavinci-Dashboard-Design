import React from "react";

const Item = ({
  listIcon,
  listTitle,
  listDot,
  listNumber,
  listSubtitle,
  listStats,
  listColors,
  listColorsMedium,
  listColorsDark,
}) => {
  return (
    <>
      <div
        className={`relative ${listColors} px-5 rounded-md py-2 justify-center items-center transition-all duration-700 ease-in-out w-full h-40 hover:scale-105 flex `}
      >
        <div className="absolute top-5 left-5 ">
          <div
            className={`${listColorsMedium} w-8 h-8 rounded-full flex justify-center items-center`}
          >
            <p className="text-xl text-gray-600">{listIcon}</p>
          </div>
        </div>
        <div className="absolute top-6 right-5 ">
          <p className="text-gray-500 text-xl">{listDot}</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="text-gray-700 font-medium text-lg">{listTitle}</p>
          <h1 className="font-medium text-4xl">{listNumber}</h1>
          <p className="text-gray-500">{listSubtitle}</p>
        </div>
        <div className="absolute bottom-6 right-5">
          <p className={`text-2xl text-gray-500`}>{listStats}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
