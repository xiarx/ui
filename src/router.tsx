import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Index from "@routes/index";
import Error from "@routes/error";

export enum Path {
  INDEX = "/",
  ERROR = "/error",
}

const router = createBrowserRouter([
  {
    path: Path.INDEX,
    element: <Index />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
