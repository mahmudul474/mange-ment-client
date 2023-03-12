import React from 'react';
import { GiClockwork, GiRapidshareArrow } from "react-icons/gi";
import car from "./car.avif"
import top from "./top.png"
import share from "./assets/share.png"
import rivib from "./assets/ricib.png"
import shidhule from "./assets/shidul.avif"
import pay from "./assets/pay.avif"
import personal from "./assets/personal.png"
import tracking  from "./assets/tracking.png"
const Proces = () => {
    return (
      <div>
        <div className="text-center my-8 ">
          <h5 className="text-center font-semibold capitalize  text-xl">
            our work process
          </h5>
          <h2 className="text-4xl font-bold capitalize">How we Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <div>
            <div className="flex my-10  items-center justify-center  px-6  ">
              <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                <img src={share} alt="" className="  w-full" />
              </div>

              <div className="text-left  px-9">
                <h1 className="text-xl  capitalize font-bold ">
                  Share requirement
                </h1>
                <p>Let us know what’s bothering your car</p>
              </div>
            </div>
            <div className="flex my-10  items-center justify-center  px-6  ">
              <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                <img src={shidhule} alt="" className="  w-full" />
              </div>

              <div className="text-left  px-9">
                <h1 className="text-xl  capitalize font-bold ">
                  Schedule appointment
                </h1>
                <p>
                  Avail free pick up and drop facility or Doorstep car service
                </p>
              </div>
            </div>
            <div className="flex my-10  items-center justify-center  px-6  ">
              <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                <img src={rivib} alt="" className="  w-full" />
              </div>

              <div className="text-left  px-9">
                <h1 className="text-xl  capitalize font-bold ">
                  Receive up front quote
                </h1>
                <p>Transparent pricing catering to your specific needs</p>
              </div>
            </div>
          </div>
          <div className="hidden  h-screen   relative lg:block md:block  ">
            <img src={car} alt="" className='object-cover h-full rounded-sm' />
            <img src={top} alt="" className="absolute right-0 -bottom-9" />
          </div>
          <div>
            <div>
              <div className="flex my-10  flex-row-reverse  items-center justify-center  px-6  ">
                <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                  <img src={personal} alt="" className="  w-full" />
                </div>

                <div className="text-right  px-4">
                  <h1 className="text-xl  capitalize font-bold ">
                    Personal attention
                  </h1>
                  <p>Dedicated engineers working exclusively on your car</p>
                </div>
              </div>

              <div className="flex my-10  flex-row-reverse  items-center justify-center  px-6  ">
                <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                  <img src={tracking} alt="" className="  w-full" />
                </div>

                <div className="text-right  px-4">
                  <h1 className="text-xl  capitalize font-bold ">
                    Live tracking & updates
                  </h1>
                  <p>Track your car service visually in real time</p>
                </div>
              </div>
              <div className="flex my-10  flex-row-reverse  items-center justify-center  px-6  ">
                <div className="w-24 shadow-sm p-1 rounded-md  h-28   ">
                  <img src={pay} alt="" className="  w-full" />
                </div>

                <div className="text-right  px-4">
                  <h1 className="text-xl  capitalize font-bold ">
                    Pay post service
                  </h1>
                  <p>
                    Pay online, through card or cash, post service completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Proces;