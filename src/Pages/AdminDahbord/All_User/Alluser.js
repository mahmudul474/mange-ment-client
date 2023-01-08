import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { UserContext } from "../../../Context/Authcontext";
import useAdmin from "../../../Hook/useAdmin";


const Alluser = () => {
const {user}=useContext(UserContext)

const[isadmin]=useAdmin(user?.email)
console.log(isadmin)
console.log(isadmin)


  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = res.json();
      return data;
    }
  });

  ////make admin

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization:`bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        refetch(refetch);
         if (data.modifiedCount > 0) {
           toast.success("now you are Admin");
         }
      });
  };

  return (
    <div className="">
      <h1 className="capitalize text-2xl m-4 font-bold"> users</h1>

      <div className="px-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Delet</th>
              </tr>
            </thead>
            <tbody>
              {allusers?.map((user, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <button>Admin</button>
                    ) : (
                      <button
                        onClick={() => handleAdmin(user._id)}
                        className="btn"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
