import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
      <div>
        <div className="navbar pb-2 text-yellow-50 bg-slate-800 justify-center items-end flex ">
          <li className="mr-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard">All orders</Link>
            </button>
          </li>
          <li className="mr-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard/allusers">All Users</Link>
            </button>
          </li>
        </div>

        <Outlet></Outlet>
      </div>
    );
};

export default Dashbord;