import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Authcontext';

const Sociallogin = () => {
  const { googleLogin}=useContext(UserContext)
  const location=useLocation()
 const navigate=useNavigate()
 let x= location.state?.from?.pathname || "/";


  const probaidr=new GoogleAuthProvider()
  const handlegoogle=()=>{
    googleLogin(probaidr)
    .then((result)=>{
      const user=result.user
      navigate(x,{replace:true})
      console.log(user)
    })
  }
    return (
        <div className="mt-4 mb-2 sm:mb-4">
              <button onClick={handlegoogle} className="btn w-full btn-outline btn-primary ">coutnwe with google</button>
                  </div>
    );
};

export default Sociallogin;