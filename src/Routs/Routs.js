import Order from "../Components/creatOrder/Order";

import Myorder from "../Components/Myorder/Myorder";
import Layot from "../Layot/Layot";
import Blog from "../Pages/AdminDahbord/Add-blog/Blog";
import Addcours from "../Pages/AdminDahbord/Addcours/Addcours";
import AddEng from "../Pages/AdminDahbord/AddEngineyar/AddEng";
import Allorders from "../Pages/AdminDahbord/All-oders/Allorders";
import Alluser from "../Pages/AdminDahbord/All_User/Alluser";
import Dashbord from "../Pages/AdminDahbord/Dahsbord/Dashbord";
import Mangebanner from "../Pages/AdminDahbord/Dahsbord/ManageHomeb/Mangebanner";
import ManageEinginier from "../Pages/AdminDahbord/ManageEnginier/ManageEinginier";
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
        loader: ({ params }) =>
          fetch(`https://y-devsobuj910.vercel.app/cars/${params.id}`)
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
                <AddEng></AddEng>
              </AdminRout>
            )
          },
          {
            path: "/dashboard/manageEng",
            element: (
              <AdminRout>
                <ManageEinginier></ManageEinginier>
              </AdminRout>
            )
          },
          {
            path: "/dashboard/addcours",
            element: (
              <AdminRout>
                <Addcours></Addcours>
              </AdminRout>
            )
          },
          {
            path: "/dashboard/addblock",
            element: (
              <AdminRout>
                <Blog></Blog>
              </AdminRout>
            )
          },
          {
            path: "/dashboard/homebanner",
            element:<AdminRout>
              <Mangebanner></Mangebanner>
            </AdminRout>
          }
        ]
      }
    ]
  }
]);

export default router;