import React from "react";
import { useClasses } from "../../../hooks/useClasses";

import styles from "./GridItem.module.css";

export const GridItem = ({ children, col = 1 }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      col,
    },
    classes: [styles.gridItem],
  });

  return <div className={classes}>{children}</div>;
};

interface Props {
  col?: number;
  colXs?: number;
  colSm?: number;
  colMd?: number;
  colLg?: number;
  colXl?: number;
  children: React.ReactNode;
}
