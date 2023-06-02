import React from "react";

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-2xl font-bold tracking-tight text-slate-900">{title}</p>
  </div>
);

export default Header;

// import React from "react";

// const Header = () => {
//   return <div>Header</div>;
// };

// export default Header;
