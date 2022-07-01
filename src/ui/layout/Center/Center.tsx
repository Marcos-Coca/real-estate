import React, { ReactNode } from "react";

import { styles } from ".";

interface Props {
  children: ReactNode;
}

export const Center = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
