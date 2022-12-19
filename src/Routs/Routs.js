import Order from "../Components/creatOrder/Order";
import Myorder from "../Components/Myorder/Myorder";
import Layot from "../Layot/Layot";
import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import CarDittails from "../Shared/CarDittails";
import Private from "./Private";
const { createBrowserRouter } = require("react-router-dom");



const router=createBrowserRouter([
    {
        path: "/",
         element:<Layot></Layot>,
         children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/cardettails/:id",
                element:<Private><CarDittails></CarDittails></Private>,
                loader:({params})=>fetch(`https://y-five-livid.vercel.app/cars/${params.id}`)
            },
            {
                path:"/order/:id",
                element:<Private><Order></Order></Private>,
                loader:({params})=>fetch(`https://y-five-livid.vercel.app/cars/${params.id}`)
            },
            {
                path:"/orders",
                element:<Private><Myorder></Myorder></Private>
            }

         ]
    }
])

export default router;