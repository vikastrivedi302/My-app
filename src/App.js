import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantManu from "./components/RestaurantManu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Card from "./components/Card";
// import Grocery from "./components/Grocery";

function App() {
// console.log(resObj);

//Chunking 
//Code spliting
//Dymanic Boundling
//Lazy Loading
//on demand loading
//dynamix import

const Grocery = lazy (() => import("./components/Grocery"));

const About = lazy(()=> import("./components/About"));

const AppLayout = () => {

  const [userName , setUserName] = useState();

  useEffect(()=> {
    const data = {
    name:"",
  };
  setUserName(data.name);
},[]);
    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
       <div className="app">
        <Header/>
        <Outlet/>
    </div>
      </UserContext.Provider>
      </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantManu/>
      },
      {
        path:"/card",
        element:<Card/>
      },
    ],
    errorElement:<Error/>
  },

]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<RouterProvider router={appRouter}/>)
}

export default App;