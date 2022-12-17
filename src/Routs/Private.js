import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from '../Components/Loder/Loding';
import { UserContext } from '../Context/Authcontext';

const Private = ({children}) => {
    const {user,loading}=useContext(UserContext)
    const location=useLocation()

     if(loading){
        return <Loding></Loding>
     }


if(user){
    return children
}


    return  <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;