import React, { ReactNode } from "react";

import { Footer } from "@main/components/Footer";
import { Header } from "@main/components/Header";

import { styles } from ".";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
