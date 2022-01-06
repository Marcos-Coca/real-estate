import React from "react";
import { useClasses } from "../../../hooks/useClasses";
import styles from "./GridItem.module.css";
export const GridItem = ({ children, col }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      col,
    },
  });

  return <div className={classes}>{children}</div>;
};

interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  col?: number;
  children: React.ReactNode;
}
