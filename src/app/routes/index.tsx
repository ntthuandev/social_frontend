import { pathKeys } from "@/lib/react-router";
import { createBrowserRouter, redirect } from "react-router-dom";
import { Login, Register } from "./_auth";
import MainLayout from "@/components/layouts/MainLayout";
import { Explore, Home, Profile } from "./_root";
import NotFound from "./not-found";
export const createRouter = createBrowserRouter([
  {
    path: pathKeys.login(),
    element: <Login />,
  },
  {
    path: pathKeys.register(),
    element: <Register />,
  },
  {
    path: pathKeys.root,
    element: <MainLayout />,
    children: [
      {
        path: pathKeys.home(),
        element: <Home />,
      },
      {
        path: pathKeys.profile.root(),
        element: <Profile />,
      },
      {
        path: pathKeys.explore(),
        element: <Explore />,
      },
    ],
  },
  {
    path: pathKeys.page404(),
    element: <NotFound />,
  },
  {
    path: pathKeys.catchAll(),
    loader: async () => redirect(pathKeys.page404()),
  },
]);
