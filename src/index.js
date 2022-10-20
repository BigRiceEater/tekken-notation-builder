import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { RecoilRoot } from "recoil";

import {
  createHashRouter as createRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./layout/root";
import Home from "./routes/home";
import { ChangeLog } from "./routes/changelog";
import ErrorPage from "./routes/error-page";

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/changelog", element: <ChangeLog /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
