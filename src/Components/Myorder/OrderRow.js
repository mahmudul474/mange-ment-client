import React, { useEffect, useState } from 'react';

const OrderRow = ({order,handleDelete,handleuptgrade}) => {

 const{product,productName,email,phoneNumber,location,price,_id,status}=order
 const [img,setImg]=useState({})


useEffect(()=>{

    fetch(`https://y-devsobuj910.vercel.app/cars/${product}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.img)
        setImg(data.img)
    })
},[product])


    return (
        <tr className='text-left'>
        <td className="px-5 py-5 border-b  border-gray-200 bg-white text-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0 w-14 h-14">
                    <img className="w-full h-full rounded-full object-cover"   src={img} alt="" />
                </div>
                    
                </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{productName}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
               {price}
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
                {phoneNumber}
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
                {location}
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span  className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
            <span className="relative">{email}</span>
            </span>
        </td>

        <td>
        <button onClick={()=>handleuptgrade(_id)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        {
            status? status : "pending"
        }
            </button>
        </td>
        <td>
        <button onClick={()=>handleDelete(_id)} type="button" className="bg-white rounded-md m-auto block p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </td>
    </tr>
    );
};

export default OrderRow;