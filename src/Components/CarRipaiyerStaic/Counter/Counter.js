import React from 'react';
 


const Counter = () => {
  return (
    <div class=" grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-1">
      <div className="flex items-center   ">
        <h1 className="text-3xl font font-bold ">2.9K</h1>
       
        <h3 className="text-xl  capitalize ">
          Vehicle  Repaired
        </h3>
      </div>

      <div className="flex items-center my-5  ">
        <h1 className="text-3xl font font-bold mr-1 ">5</h1>
       
        <h3 className="text-xl  capitalize ">
          Years of
           experience
        </h3>
      </div>

      <div className="flex items-center   ">
        <h1 className="text-3xl font font-bold ">2K</h1>
       
        <h3 className="text-xl  capitalize ">Pellentesque tincidunt</h3>
      </div>

      <div className="flex items-center   ">
        <h1 className="text-3xl font font-bold ">32</h1>
       
        <h3 className="text-xl  capitalize ">Silencer Coating</h3>
      </div>
    </div>
  );
};

export default Counter;