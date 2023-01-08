import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Authcontext";
import { getToken } from "../../Hook/getAuthToken";

const Sociallogin = () => {
  const { googleLogin } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  let x = location.state?.from?.pathname || "/";

  const probaidr = new GoogleAuthProvider();
  const handlegoogle = () => {
    googleLogin(probaidr).then((result) => {
      const user = result.user;
      saveduser(user.email, user.displayName);
      getToken(user.email);
      navigate(x, { replace: true });
    });
  };

  const saveduser = (email, name) => {
    const userinfo = {
      email,
      name
    };

    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userinfo)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mt-4 mb-2 sm:mb-4">
      <button
        onClick={handlegoogle}
        className="btn w-full btn-outline btn-primary "
      >
        coutnwe with google
      </button>
    </div>
  );
};

export default Sociallogin;
