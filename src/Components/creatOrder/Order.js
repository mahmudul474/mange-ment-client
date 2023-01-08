import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../Context/Authcontext';

const Order = () => {
    const {user}=useContext(UserContext)

    const order=useLoaderData()
    const {title,price,_id, img}=order 


const handleorder=(event)=>{

event.preventDefault()
 const from=event.target;
 const email=user?.email || "unregistered";
 const phoneNumber=from.phoneNumber.value;
 const location=from.location.value;
 const messege=from.text.value



const order={
    product:_id,
    productName:title,
    price,
    email,
    phoneNumber,
    location,
    messege
}

fetch("http://localhost:5000/orders",{
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(order)
})
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    if(data.acknowledged){
        from.reset()
        toast.success("order is space",9000)
    }
   })


}
    
    return (
        
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Back</p>
                        </button>
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order Now</p>
            
                    </div>




                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">{title}</p>
                                <p className="text-base font-semibold leading-none text-gray-600">${price}</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={img}alt="car" />
                            </div>
                        </div>

      <form onSubmit={handleorder} className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" defaultValue={user.email} readOnly />
                            </div>

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="number" name='phoneNumber' placeholder="Phone Number"  required/>
                            </div>
                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name='location' mplaceholder="location" required />
                            </div>
                            <div className="mt-8">
                            <textarea placeholder='messege' className=' p-4 rounded w-full h-32 ' name="text"  />
                            </div>


                            <button  type='sumbmit' className="border mt-7 border-transparent hover:border-gray-300 bg-gray-900  text-white flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                                
                                <div>
                                    <p className="text-base leading-4">Place Order</p>
                                </div>
                            </button>                          
                            </form>
                            </div>           
                                </div>

                               
                            

                           
                        </div>
                
          
        
    );
};

export default Order;