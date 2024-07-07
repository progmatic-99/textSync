import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import Layout from "./components/layout";
import TextEditor from "./components/TextEditor";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "document/:id",
        element: <TextEditor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
