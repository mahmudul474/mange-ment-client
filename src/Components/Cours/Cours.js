import React, { useEffect, useState } from 'react';

const Cours = () => {


    const[course,setCourse]=useState([])
    useEffect(()=>{
        fetch("https://y-devsobuj910.vercel.app/allcourses")
        .then(res=>res.json())
        .then(data=>{
            setCourse(data)
        })
    },[])
    
    
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="my-8">
        <h2 className="text-xl capitalize font-bold">Top level cours</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {course?.map((cours) => (
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={cours.image}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                ></a>
                <span className="text-gray-600">price: {cours.pric}</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {cours.name}
              </a>
              <p className="mb-2 text-gray-700">{cours.text}</p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 
   
};

export default Cours;