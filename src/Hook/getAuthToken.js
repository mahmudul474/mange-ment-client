
export const getToken=(email)=>{
     if (email) {
       fetch(`http://localhost:5000/jwt?email=${email}`)
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           if (data.accesToken) {
             localStorage.setItem("token", data.accesToken);
            
           }
         });
     }
 
}