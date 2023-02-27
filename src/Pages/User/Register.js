import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Authcontext";
import Sociallogin from "./Sociallogin";
 
import { getToken } from "../../Hook/getAuthToken";

const Register = () => {
  const { createUser, uptadeteuser } = useContext(UserContext);
  const [eroro, setEroor] = useState("");

  const navigete = useNavigate();
  
 
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 7) {
      setEroor("Password must be at least 7 characters long");
      return;
    }
    //store user information

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setEroor("");

        const username = {
          displayName: name
        };
        uptadeteuser(username).then((result) => {
          savedUser(user.email, user.displayName);
        });
      })
      .catch((erro) => {
        console.log(erro);
        setEroor(erro.message);
      });
  };

  const savedUser = (email, name) => {
    const userinfo = {
      name: name,
      email: email
    };

    fetch("https://y-devsobuj910.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userinfo)
    })
      .then((res) => res.json())
      .then((data) => {
       getToken(email);
      });
  };

  return (
    <div className="w-full max-w-xl mx-auto my-20 xl:px-8 xl:w-5/12">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Register .........
        </h3>
        <form onSubmit={handleRegister}>
          <p className="text-red-600">{eroro}</p>

          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="block text-left  mb-1 font-medium">
              Your Name
            </label>
            <input
              placeholder="john doe"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              name="name"
            />
          </div>
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
              Register
            </button>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            already have acount
            <Link className="underline text-fuchsia-600" to="/login">
              login
            </Link>
          </p>
        </form>
        <Sociallogin></Sociallogin>
      </div>
    </div>
  );
};

export default Register;
