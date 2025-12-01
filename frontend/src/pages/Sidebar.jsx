import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-x-72 cursor-pointer ${
            isActive
              ? "bg-gray-200 font-semibold text-blue-500"
              : "text-gray-500"
          }`
        }
        to={"/"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-x-72 cursor-pointer ${
            isActive
              ? "bg-gray-200 font-semibold text-blue-500"
              : "text-gray-500"
          }`
        }
        to={"/upload-excel"}
      >
        UseExcel
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-x-72 cursor-pointer ${
            isActive
              ? "bg-gray-200 font-semibold text-blue-500"
              : "text-gray-500"
          }`
        }
        to={"/manage-sales"}
      >
        Manage Sales
      </NavLink>
    </div>
  );
};

export default Sidebar;
