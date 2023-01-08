import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/Authcontext";
import useAdmin from "../Hook/useAdmin";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  

  const { user, logout } = useContext(UserContext);
  const [isadmin] = useAdmin(user?.email);

  const handlelogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navitem = (
    <>
      <li>
        <Link
          to="/"
          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
        >
          Home
        </Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link
              to="/orders"
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Orders
            </Link>
          </li>
          <li>
            {isadmin=== true ?
              <Link
                to="/dashboard"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Dashbord
              </Link>:""
            }
          </li>

          <li>
            <Link className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
              {" "}
              {user?.displayName}
            </Link>
          </li>
          <li className="bg-none hover:bg-none">
            {user?.photoURL ? (
              <div className="">
                <img className="rounded-full w-10 h-10" src={user?.photoURL} />
              </div>
            ) : (
              ""
            )}
          </li>

          <li>
            <button
              onClick={handlelogout}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >
              login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-slate-800 text-yellow-50  ">
      <div className="navbar-start ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 text-emerald-50 rounded-box w-52 "
          >
            {navitem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CarUp</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navitem}</ul>
      </div>
    </div>
  );
};

export default Header;
