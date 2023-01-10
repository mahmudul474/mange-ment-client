import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { RiPriceTag2Fill } from "react-icons/ri";
import { SiExpertsexchange } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

const Facelity = () => {
  return (
    <div className="my-28 px-9">
      <div>
        <h2 className=" text-4xl capitalize  m-auto block text-center">
          Why Choose Us
        </h2>
        <span className="w-40 h-1 mt-2 bg-slate-800  block m-auto"></span>
      </div>

      <div className="grid my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card   bg-slate-300 shadow-xlease-in duration-300  hover:-translate-y-6   hover:bg-slate-800 hover:text-yellow-50 ">
          <span className="text-7xl mt-7 blocktext-slate-800 m-auto ">
            <SiExpertsexchange></SiExpertsexchange>
          </span>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Expert Mechanics</h2>
            <p>
              Most of the vehicles get damaged just because of maintenance
              neglect you take.
            </p>
            <div className="card-actions">
              <button className="btn my-8">
                Learn More
                <span className="ml-4">
                  <BsArrowRight></BsArrowRight>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="card  -translate-y-6   bg-slate-800 text-yellow-50 shadow-xl">
          <span className="text-7xl mt-7 block text-yellow-50 m-auto ">
            <RiPriceTag2Fill></RiPriceTag2Fill>
          </span>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Reasonable Price</h2>
            <p>
              Receiving offers through Autobutler guarantees your certainty your
              car. fixed if the mechanic.
            </p>
            <div className="card-actions">
              <button className="btn my-8">
                Learn More
                <span className="ml-4">
                  <BsArrowRight></BsArrowRight>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="card ease-in duration-300  hover:-translate-y-6   hover:bg-slate-800 hover:text-yellow-50  bg-slate-300 shadow-xl">
          <span className="text-7xl mt-7 blocktext-slate-800 m-auto ">
            <FaShippingFast></FaShippingFast>
          </span>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Fast Feature Delivery</h2>
            <p>
              If the mechanic discovers other issues with your car while it's in
              the garage he will call.
            </p>
            <div className="card-actions">
              <button className="btn my-8">
                Learn More
                <span className="ml-4">
                  <BsArrowRight></BsArrowRight>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facelity;
