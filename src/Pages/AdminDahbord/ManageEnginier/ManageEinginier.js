import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loding from "../../../Components/Loder/Loding";

const ManageEinginier = () => {
  const {
    data: allEngenier = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ["allEngenier"],
    queryFn: async () => {
      const res = await fetch("https://y-devsobuj910.vercel.app/Enginer", {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await res.json();
      return data;
    }
  });

  //delete eng
  const deletEngeniyer = (id) => {
    const agree = window.confirm(`Are you sure you ${id} want to delete`);

    if (agree) {
      fetch(`https://y-devsobuj910.vercel.app/enginier/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          if (data.deletedCount > 0) {
            toast.success("engnierDeleted");
          }
        });
    } else {
      toast.error(" thanks to youre dicission");
    }
  };

  if (isLoading) {
    return <Loding></Loding>;
  }

  return (
    <div>
      <h1 className="capitalize text-xl  font-bold my-3"> manage enginier</h1>

      <div className="p-14 m-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>index</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Speciyalty</th>
                <th>Email</th>
                <th>Delet</th>
              </tr>
            </thead>
            <tbody>
              {allEngenier?.map((eng, i) => (
                <tr key={eng._id}>
                  <td>{i + 1}</td>
                  <td>
                    <img className="w-14 h-14 rounded-full" src={eng.image} alt="enginer" />
                  </td>
                  <td>{eng.name}</td>
                  <td>{eng.type}</td>
                  <td>{eng.email}</td>
                  <td>
                    <button
                      onClick={() => deletEngeniyer(eng._id)}
                      className="btn bg-red-600 btn-sm border-none text-black"
                    >
                      Delet
                    </button>
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

export default ManageEinginier;
