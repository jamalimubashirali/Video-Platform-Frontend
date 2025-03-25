import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth.slice";
import userService from "./services/user.service";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Layout from "./layouts/Layout";
import Layout2 from "./layouts/Layout2";
import RootLayout from "./layouts/RootLayout";

const UserProfile = () => <p>User Profile Page</p>;

function App() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    userService
      .getCurrentUser()
      .then((response) => {
        if (response.data) {
          dispatch(login(response.data));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(`Error Getting Current User: ${error}`);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          element: <Layout />,
          children: [
            { index: true, element: <HomePage /> }, 
            { path: "user-profile/:id", element: <UserProfile /> },
          ],
        },
        {
          path: "auth",
          element: <Layout2 />,
          children: [
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <SignupPage /> },
          ],
        },
      ],
    },
  ]);
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
