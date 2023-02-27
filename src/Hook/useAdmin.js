import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isadmin, setIsadmin] = useState("");
const[isAdminloadnin,setIsadminLoding]=useState(true)
  useEffect(() => {
    if (email) {
      fetch(`https://y-devsobuj910.vercel.app/admin/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsadmin(data.isAdmin);
          setIsadminLoding(false)
        });
    }
  }, [email]);

  return [isadmin,isAdminloadnin];
};

export default useAdmin;
