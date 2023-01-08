import Order from "../Components/creatOrder/Order";
import Myorder from "../Components/Myorder/Myorder";
import Layot from "../Layot/Layot";
import Allorders from "../Pages/AdminDahbord/All-oders/Allorders";
import Alluser from "../Pages/AdminDahbord/All_User/Alluser";
import Dashbord from "../Pages/AdminDahbord/Dahsbord/Dashbord";
import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import CarDittails from "../Shared/CarDittails";
import AdminRout from "./AdminRout";
import Private from "./Private";
const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layot></Layot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/cardettails/:id",
        element: (
          <Private>
            <CarDittails></CarDittails>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/order/:id",
        element: (
          <Private>
            <Order></Order>
          </Private>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/orders",
        element: (
          <Private>
            <Myorder></Myorder>
          </Private>
        )
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            
            <AdminRout>
              <Dashbord></Dashbord>
            </AdminRout>
          </Private>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <AdminRout>
                <Allorders></Allorders>
              </AdminRout>
            )
          },
          {
            path: "/dashboard/allusers",
            element: (
              <AdminRout>
                <Alluser></Alluser>
              </AdminRout>
            )
          }
        ]
      }
    ]
  }
]);

export default router;