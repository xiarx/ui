import React from "react";

import type { FC } from "react";

import "./style";

const Header: FC = (): JSX.Element => {
  return (
    <div id="header">
      <h1>UI</h1>
      <h3>A really catchy slogan</h3>
    </div>
  );
};

export default Header;
