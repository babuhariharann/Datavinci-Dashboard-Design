import React from "react";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="w-72 bg-white  border-r-2 h-screen">
      {activeMenu && (
        <>
          <div className="p-4">
            <Link
              to="/"
              className="items-center gap-0.5 ml-3 mt-4 flex text-2xl font-bold tracking-tight dark:text-white text-slate-900"
            >
              Clean<span className="text-blue-600">simple</span>
            </Link>
          </div>
          <div className="mt-7 ml-3">
            {links.map((item) => (
              <div key={item.title} className="p-4">
                <p className="text-gray-400  m-3 mt-4 ">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    className="flex items-center py-3 text-gray-600  hover:text-blue-600 transition duration-300 transform hover:scale-105 hover:translate-x-3"
                    activeClassName="font-bold text-primary"
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
