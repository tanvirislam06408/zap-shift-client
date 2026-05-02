import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/HomePage/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Coverage/Coverage";
import AddParcelForm from "../pages/AddParcelForm/AddParcelForm";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import DeashBoardLayout from "../Layouts/DeashBoardLayout";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'coverage', element: <Coverage/> },
      { path: '/add-parcel', element:  <AddParcelForm/>}
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login },
      {
        path:'register',Component:Register
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivetRoutes>
      <DeashBoardLayout/>
    </PrivetRoutes>,
    children:[
      {
        
      }
    ]
  }
]);