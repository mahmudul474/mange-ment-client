import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
 
import ReactStars from "react-rating-stars-component";
import { UserContext } from "../../Context/Authcontext";
import Feadback from "./Showfeadback/Feadback";






 function Ratting({ _id }) {
  const{user}=useContext(UserContext)
   const [ratting, setRatting] = useState(null);
   const [feadback, setFeadback] = useState("");

   const thirdExample = {
     size: 40,
     count: 5,
     isHalf: true,
     value: 2,
     color: "grey",
     activeColor: "#FFD700",
     onChange: (newValue) => {
       setRatting(newValue);
     }
   };

   const handlefeadback = (e) => {
    e.preventDefault();
     const from =e.target
     const feadbacks = {
       text: feadback,
       ratting: ratting,
       product_id: _id,
       user
     };

     fetch("https://y-devsobuj910.vercel.app/feadback", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(feadbacks)
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         refetch()
         from.reset();
         toast.success(" feadbacks  give successfully!");
        
        });
   };


const { data: feadbackss = [] ,refetch, isLoading } = useQuery({
  queryKey: "feadbackss",
  queryFn: async () => {
 const res = await fetch(`https://y-devsobuj910.vercel.app/${_id}`)
  const data=await res.json()
  return  data
}
});




// if(isLoading){
//    return <div> <h1>review  is loading .....</h1> </div>
// }

   return (
     <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
       <div className=" p-8">


        
         <>
           <div className="flex items-center mb-3">
             <svg
               aria-hidden="true"
               className="w-5 h-5 text-yellow-400"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <title>First star</title>
               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
             <svg
               aria-hidden="true"
               className="w-5 h-5 text-yellow-400"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <title>Second star</title>
               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
             <svg
               aria-hidden="true"
               className="w-5 h-5 text-yellow-400"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <title>Third star</title>
               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
             <svg
               aria-hidden="true"
               className="w-5 h-5 text-yellow-400"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <title>Fourth star</title>
               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
             <svg
               aria-hidden="true"
               className="w-5 h-5 text-gray-300 dark:text-gray-500"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <title>Fifth star</title>
               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
            
           </div>
          
           <div className="flex items-center mt-4">
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               5 star
             </span>
             <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
               <div
                 className="h-5 bg-yellow-400 rounded"
                 style={{ width: "70%" }}
               />
             </div>
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               70%
             </span>
           </div>
           <div className="flex items-center mt-4">
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               4 star
             </span>
             <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
               <div
                 className="h-5 bg-yellow-400 rounded"
                 style={{ width: "17%" }}
               />
             </div>
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               17%
             </span>
           </div>
           <div className="flex items-center mt-4">
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               3 star
             </span>
             <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
               <div
                 className="h-5 bg-yellow-400 rounded"
                 style={{ width: "8%" }}
               />
             </div>
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               8%
             </span>
           </div>
           <div className="flex items-center mt-4">
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               2 star
             </span>
             <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
               <div
                 className="h-5 bg-yellow-400 rounded"
                 style={{ width: "4%" }}
               />
             </div>
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               4%
             </span>
           </div>
           <div className="flex items-center mt-4">
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               1 star
             </span>
             <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
               <div
                 className="h-5 bg-yellow-400 rounded"
                 style={{ width: "1%" }}
               />
             </div>
             <span className="text-sm font-medium text-blue-600 dark:text-blue-500">
               1%
             </span>
           </div>
         </>
       </div>
       <div>
         <form className="w-full" onSubmit={handlefeadback}>
           <div className="p-8">
             <input
               type="text"
               onChange={(e) => setFeadback(e.target.value)}
               className="w-full p-3 h-32  rounded-lg"
             />

             <div className="text-center block m-auto ">
               <h2 className="text-left  text-xl capitalize bold pt-3">
                 Rate us
               </h2>
               <ReactStars {...thirdExample} />
             </div>
             <button className="btn w-40 text-center block " type="submit">
               submit
             </button>
           </div>
         </form>
       </div>


{
  feadbackss?.map(feedback=><Feadback feadback={feadback}></Feadback>)
}



     </div>
   );
 }


export default  Ratting

//    <ReactStars {...thirdExample} />