import React from "react";
import { Link, useLocation } from "react-router-dom";

import type { FC } from "react";

import { Path } from "@app/router";

import "./style";

const Navigation: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <div id="navigation">
      <Link
        className={location.pathname === Path.INDEX ? "active" : undefined}
        to={Path.INDEX}
      >
        Index
      </Link>
    </div>
  );
};

export default Navigation;
