import React, { useEffect, useState } from "react";



const Baner = () => {

  const [banner,setBanner]=useState({})
  console.log(banner)

  useEffect(()=>{
    fetch("https://y-devsobuj910.vercel.app/getbanner")
    .then(res=>res.json())
    .then(data=>{ 

       setBanner(data)
    })
  },[])



  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner.image})`
      }}
    >

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Baner;
