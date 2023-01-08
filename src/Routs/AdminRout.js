import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loding from "../Components/Loder/Loding";
import { UserContext } from "../Context/Authcontext";
import useAdmin from "../Hook/useAdmin";


const AdminRout = ({ children }) => {
  const { user, loading } = useContext(UserContext);

const [isadmin, isAdminloadnin] = useAdmin(user?.email);


  const location = useLocation();

  if ( isAdminloadnin) {
    return <Loding></Loding>;
  }

  if (user && isadmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRout;
