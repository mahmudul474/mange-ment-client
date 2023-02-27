
export const getToken=(email)=>{
     if (email) {
       fetch(`https://y-devsobuj910.vercel.app/jwt?email=${email}`)
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           if (data.accesToken) {
             localStorage.setItem("token", data.accesToken);
            
           }
         });
     }
 
}