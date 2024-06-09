import React from "react";
import { RouterProvider } from "react-router-dom";

import type { FC } from "react";

import router from "@app/router";

import "normalize.css";
import "./theme";

const App: FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
