import React, { ReactNode } from "react";

import { Footer } from "@main/components/Footer";
import { Header } from "@main/components/Header";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Footer />
      {children}
      <Header />
    </>
  );
};
