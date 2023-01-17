import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetailPost from "../pages/DetailPost";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/detail-post/:id_post",
    element: <DetailPost />,
  },
  {
    path: "/profile/:id_user",
    element: <Profile />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/settings/:id_user",
    element: <Settings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
