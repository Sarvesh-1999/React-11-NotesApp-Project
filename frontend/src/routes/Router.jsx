import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
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
    path: "*",
    element: <NotFound />,
  },
]);
