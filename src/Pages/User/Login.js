import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Authcontext';
import Sociallogin from './Sociallogin';

const Login = () => {
 const {login}=useContext(UserContext)
 const [eroor,setEroor]=useState("")
const location=useLocation()
 const navigate=useNavigate()
 let x= location.state?.from?.pathname || "/";

const handlelogin=(event)=>{

  event.preventDefault();
  const from=event.target;
  const  email=from.email.value;
  const password=from.password.value;

  console.log(email,password);


    login(email,password)
    .then((result)=>{
 
      const user=result.user;
      navigate(x, { replace: true });

      setEroor("")
      console.log(user);
        
    }).catch(error=>{
      console.log(error);
      setEroor(error.message);

    })
   
  
}


    return (
        <div className="w-full max-w-xl mx-auto my-20 xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  login
                </h3>
                <form onSubmit={handlelogin}>
                  <p className='text-red-700'>{eroor}</p>
                 
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="Email"
                      className="block text-left  mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                     
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="text-left block mb-1 font-medium"
                    >
                     Password
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 bg-slate-900 focus:shadow-outline focus:outline-none"
                    >
                     Login  
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                     you are new carDeller <Link className='underline text-fuchsia-600' to="/register">please Regiseter</Link>
                  </p>
                 
                  
                </form>
                <Sociallogin></Sociallogin>
              </div>
            </div>
    );
};

export default Login;