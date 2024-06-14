import { pathKeys } from "@/lib/react-router";
import { createBrowserRouter, redirect } from "react-router-dom";
import { Login, Register } from "./_auth";
import { MainLayout } from "@/components/layouts";
import { Explore, Home, Profile } from "./_root";
import NotFound from "./not-found";
import { AuthProvider } from "@/contexts/AuthContext";
import PostSave from "@/features/posts/PostSave/PostSave";
import { UserPost } from "@/features/posts";
import ExplorePeople from "./_root/ExplorePeople";
import PostDetail from "./_root/PostDetail";

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
    element: (
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: pathKeys.home(),
        element: <Home />,
      },
      {
        path: pathKeys.profile.pathUserProfile(),
        element: <Profile />,
        children: [
          {
            path: pathKeys.profile.pathUserProfile(),
            element: <UserPost />,
          },
          {
            path: pathKeys.profile.pathProfileSavePost(),
            element: <PostSave />,
          },
        ],
      },
      {
        path: pathKeys.post.postDetailPage(),
        element: <PostDetail />,
      },
      {
        path: pathKeys.explore.root(),
        element: <Explore />,
      },
      {
        path: pathKeys.explore.people(),
        element: <ExplorePeople />,
      },
      {
        path: pathKeys.post.postDetail(),
        element: <Home />,
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
