import React from "react";

import type { FC, ReactNode } from "react";

import Header from "@components/layout/header";
import Navigation from "@components/layout/navigation";

import "./style";

interface Props {
  children: ReactNode;
}

const Page: FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <div id="page">
      <Header />
      <Navigation />
      <div id="content">{children}</div>
    </div>
  );
};

export default Page;
