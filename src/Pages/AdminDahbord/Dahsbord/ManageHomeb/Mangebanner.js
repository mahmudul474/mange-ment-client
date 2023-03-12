import React, { useState } from 'react';

const Mangebanner = () => {
    const imageHostKey = process.env.REACT_APP_IMAGE_HOSTKEY;
      const [eror, serEror] = useState("");
      ///enginiyerType

      const handeleEngier = (event) => {
        event.preventDefault();
        const from = event.target;
      ;
   
        
        const image = from.image.files[0];

        const fromdata = new FormData();
        fromdata.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
          method: "POST",
          body: fromdata
        })
          .then((res) => res.json())
          .then((iamgedata) => {
            serEror("");
            const blog = {
        
              image: iamgedata.data.display_url
            };

            saveblog(blog)
            from.reset()
            
          })
          .catch((er) => {
            serEror(er.message);
            console.log(er.message);
          });
      };

 const  saveblog=(blog)=>{
    fetch("https://y-devsobuj910.vercel.app/banner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify(blog)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      });
 }


    return (
      <div className="w-1/3  m-auto my-6">
        <h2 className="text-xl font-bold capitalize  my-3">
          manage home banner
        </h2>

        <form onSubmit={handeleEngier} className="mb-10">
          <h2 className="text-red-800 capitalize font-bold  text-center ">
            {eror}
          </h2>

        

          <div className="mb-1 sm:mb-2">
            <label htmlFor="image" className="block text-left mb-1 font-medium">
              uplod img
            </label>
            <input
              required
              name="image"
              type="file"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
          </div>
          


          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-slate-900"
            >
              Add
            </button>
          </div>
        </form>
      </div>
 
    );
};

export default Mangebanner;