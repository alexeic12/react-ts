import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import Projects from "../pages/Projects/Projects";

// Lazy-imported page components
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const NotFound = lazy(() => import("../pages/Not Found/Not Found"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
