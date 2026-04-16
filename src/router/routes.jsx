import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/HomePage/Home/Home";



export const router = createBrowserRouter([
  {
    path:"/",
    Component:RootLayout,
    children:[
        {index:true,Component:Home},
        {path:'/service',element:<h1>service</h1>}
    ]
  },
]);