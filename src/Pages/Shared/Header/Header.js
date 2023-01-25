import React from "react";
import { Link } from "react-router-dom"
const Header = () => {
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/products">Features</Link>
      </li>
      <li className="font-semibold">
        <Link to="/cart">Send</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:px-36">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className=" ghost-btn normal-case text-xl">
         
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-blue-600 border-0 text-white hover:bg-blue-700 ml-2"
        >
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;