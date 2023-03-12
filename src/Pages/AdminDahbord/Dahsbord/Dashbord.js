import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
      <div>
        <div className="navbar pb-2 xs:flex-row sm:flex-row md:flex-row  lg:flex-row flex-col  text-yellow-50 bg-slate-800 justify-center items-center flex ">
          <li className="m-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard">Add Teacher</Link>
            </button>
          </li>
          <li className="m-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard/manageEng">Manege teacher</Link>
            </button>
          </li>
          <li className="m-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard/addcours">Add-cours</Link>
            </button>
          </li>
          <li className="m-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard/addblock">Add-block</Link>
            </button>
          </li>
          <li className="m-3  capitalize text-xl">
            <button className="btn">
              <Link to="/dashboard/homebanner">Manage homebanner</Link>
            </button>
          </li>
        </div>

        <Outlet></Outlet>
      </div>
    );
};

export default Dashbord;