import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetailPost from "../pages/DetailPost";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Settings from "../pages/Settings";
import EditPost from "../pages/EditPost";
import { useCookies } from "react-cookie";
import axios from "axios";

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
    path: "/edit-post/:id_post",
    element: <EditPost />,
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
  const [cookie, , removeCookie] = useCookies(["token", "id_user"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config: any) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
        removeCookie("id_user");
      }
      return Promise.reject(error);
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
