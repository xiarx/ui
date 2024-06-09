import React from "react";

import type { FC } from "react";

import "./style";

const Error: FC = (): JSX.Element => {
  return (
    <div id="error">
      <h4>Whoops! Something went wrong.</h4>
    </div>
  );
};

export default Error;
