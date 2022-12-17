import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../Context/Authcontext';
import OrderRow from './OrderRow';

const Myorder = () => {
 const {user}=useContext(UserContext)
const [orders,serOrders]=useState([])


useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        serOrders(data)

    })

},[user?.email])



const handleDelete=(id)=>{
    fetch(`http://localhost:5000/orders/${id}`,{
        method: 'DELETE'
    }).then(res=>res.json())
    .then(data=>{
       console.log(data)
       if(data.deletedCount>0){
        
        toast.success("delet success")
        const remeningOrder=orders.filter(odr=>odr._id !== id)
        serOrders(remeningOrder)
       }
       
    })

}



const handleuptgrade=(id)=>{
    fetch(`http://localhost:5000/orders/${id}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            status: 'APPROVED',
        })

    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
        
           const remeningUpd=orders.filter(odr=>odr._id !== id)
           const upd=orders.find(odr=>odr._id===id)
           upd.status='APPROVED'
         
           const newrodrs=[...upd,remeningUpd]
           serOrders(newrodrs)
        
        }
    })

}



    return (
        <>{ /* component */ }
        <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">Products Oder</h2>
                    <span className="text-xs">All products item</span>
                </div>
              
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                         PhoneNumber
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    orders.map(order=><OrderRow key={order._id} handleDelete={handleDelete} order={order}
                                        handleuptgrade={handleuptgrade}
                                    
                                    ></OrderRow>)
                                  }
                                   
                                </tbody>
                            </table>
                         
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Myorder;