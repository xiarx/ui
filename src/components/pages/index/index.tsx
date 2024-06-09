import React from "react";

import type { FC } from "react";

import Toggle from '@components/parts/toggle'

import "./style";

const Index: FC = (): JSX.Element => {
  return (
    <div id="index">
      <Toggle />
    </div>
  );
};

export default Index;
