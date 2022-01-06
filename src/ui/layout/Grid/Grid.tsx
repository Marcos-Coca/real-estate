import React from "react";

import styles from "./Grid.module.css";

export const Grid = ({ children }: Props) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

interface Props {
  children: React.ReactNode;
}
