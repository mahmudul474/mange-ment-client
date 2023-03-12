import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import arrow from "./assets/aroow.png";
import bg from "./assets/bg.png";
import cost from "./assets/cost.png";
import hours from "./assets/24hours.png";
import skill from "./assets/skil.png";
 import load from "./assets/load.png";
import Ratting from "./Ratting/Ratting";
 
const CarDittails = () => {
  const car = useLoaderData();
  console.log(car);
  
 

  const { description, facility, img, price, _id, service_id, title ,subimg} = car;




  return (


    <>
      <div
        className="h-40 relative "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${bg})`
        }}
      >
        <h1 className="text-cyan-50 text-left text-6xl font-bold capitalize pt-5 pl-4">
          {title}
        </h1>

        <h1 className="flex  absolute bottom-0 left-0 bg-slate-50  h-11 text-left  w-full lg:w-2/6 p-5  capitalize text-xl font-semibold justify-start items-center rounded-tr-full">
          home
          <span className=" pt-1 px-1">
            <img className="w-3 h-3 " src={arrow} alt="" />
          </span>
          services
          <span className="pt-1 px-1">
            <img src={arrow} className="w-3 h-3" alt="" />{" "}
          </span>
          {title}
        </h1>
      </div>

      <div className=" mt-10 flex justify-between lg:flex-row flex-col">
        <div className="  bg-black w-full lg:w-1/3 md:w-1/3">col1</div>


        <div className=" w-full">
          <div className="px-8">
            <div className="text-left">
              <img
                className="w-full h-screen object-cover rounded-sm"
                src={img}
                alt=""
              />

              <div className=" flex  justify-between">
                <h1 className=" my-9  capitalize font-semibold  text-4xl text-left">
                  Service overview
                </h1>

                <div className=" flex items-center ">
                  <h1 className=" my-9  mr-4 capitalize font-semibold  text-4xl text-left">
                    Price: $ {price}
                  </h1>
                  <Link to={`/order/${_id}`}>
                    <button className="flex  text-white bg-slate-800  border-0 py-2 px-6 focus:outline-none rounded">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
              <p>{description}</p>
            </div>

            <div className=" my-7 gap-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
              <div className=" mt-5 capitalize text-left">
                <h4 className="text-2xl font-semibold my-6 ">Common issues</h4>
                <p className=" font-semibold  text-lg mb-5">
                  In hac habitasse platea dictumst. Sed cursus venenatis tellus,
                  non lobortis diam volutpat sit amet. Sed tellus augue,
                  hendrerit eu rutrum in, porttitor at metus. Mauris ac
                  hendrerit metus.
                </p>
                <li className="list-disc">
                  Visual inspection of related components
                </li>
                <li>System analysis</li>
                <li>Research of Technical Service Bulletins</li>
                <li>Pin Point testing</li>
                <li>Pin Point testing</li>
              </div>
              <div className="p-5">
                <img className="w-full rounded-sm" src={subimg} alt="" />
              </div>
            </div>

            <div className=" text-left capitalize  my-8">
              <h1 className="text-4xl   font-semibold my-5">
                Service benefits
              </h1>
              <p className="font-semibold">
                Proin porta est convallis lacus blandit pretium sed non enim.
                Maecenas lacinia non orci at aliquam.ut euismod leo tortor ac
                enim. In hac habitasse platea dictumst. Sed cursus venenatis
                tellus.
              </p>

              <div className=" grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                <div className="flex my-10  items-center justify-center  px-6  ">
                  <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                    <img src={cost} alt="" className="  w-full" />
                  </div>

                  <div className="text-left  px-9">
                    <h1 className="text-xl  capitalize font-bold ">Low cost</h1>
                    <p>
                      Sed tellus augue, hendrerit eu rutrum in, porttitor at
                      metusris ac hendrerit metus.
                    </p>
                  </div>
                </div>
                <div className="flex my-10  items-center justify-center  px-6  ">
                  <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                    <img src={skill} alt="" className="  w-full" />
                  </div>

                  <div className="text-left  px-9">
                    <h1 className="text-xl  capitalize font-bold ">
                      Skilled Mechanic
                    </h1>
                    <p>Vestibulum eu quam nec neque pellentesque efficitur.</p>
                  </div>
                </div>
                <div className="flex my-10  items-center justify-center  px-6  ">
                  <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                    <img src={hours} alt="" className="  w-full" />
                  </div>

                  <div className="text-left  px-9">
                    <h1 className="text-xl  capitalize font-bold ">
                      Available 24 hours
                    </h1>
                    <p>
                      Proin porta est convallis lacus blandit pretium sed non
                      enim.
                    </p>
                  </div>
                </div>
                <div className="flex my-10  items-center justify-center  px-6  ">
                  <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                    <img src={load} alt="" className="  w-full" />
                  </div>

                  <div className="text-left  px-9">
                    <h1 className="text-xl  capitalize font-bold ">
                      Warranty & Maintenance
                    </h1>
                    <p>
                      In hac habitasse platea dictumst. Sed cursus venenatis
                      tellus, non lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>


<Ratting
  _id={_id}
></Ratting>
  
    </>
  );
};

export default CarDittails;
