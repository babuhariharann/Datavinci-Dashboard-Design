import React from "react";
import Item from "./Item";

const Listing = ({
  dashboard: { icon, title, period, periodIcon, listing },
}) => {
  return (
    <>
      <div>
        {/* Listing OverView */}
        <div className="flex items-center">
          <p className="text-red-200 text-xl">{icon}</p>
          <p className="font-semibold text-xl ml-2">{title}</p>
          <div className="flex items-center text-gray-500 font-medium  border-2 border-gray-500 rounded-full px-5 py-1 ml-12 justify-between w-36">
            <p className="text-xs">{period}</p>
            <button className="text-xl cursor-pointer">{periodIcon}</button>
          </div>
        </div>

        {/* Listing Types */}
        <div
          className={`grid items-center justify-items-center gap-7 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10`}
        >
          {listing?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Listing;
