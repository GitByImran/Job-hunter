import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StaticRoot from "./components/static-root/StaticRoot";
import Home from "./components/home/Home";
import Statistics from "./components/statistics/Statistics";
import Applieds from "./components/applieds/Applieds";
import Blogs from "./components/blogs/Blogs";
import Detail from "./components/job-detail/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaticRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("jobData.json"),
      },
      {
        path: "detail/:detailId",
        element: <Detail />,
        loader: ({ params }) => fetch(`jobData.json/${params.detailId}`),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applieds",
        element: <Applieds />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
