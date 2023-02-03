"use client";

import { useStyleConfig } from "@ui/hooks/useStyleConfig";
import { UIElement } from "@ui/types/ui-element";
import React from "react";
import { useClasses } from "../../../hooks/useClasses";

import styles from "./GridItem.module.css";

export const GridItem = ({ children, col = 1, ...rest }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      col,
    },
    classes: [styles.gridItem],
  });

  const style = useStyleConfig(rest);

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};

interface Props extends UIElement {
  col?: number;
  colXs?: number;
  colSm?: number;
  colMd?: number;
  colLg?: number;
  colXl?: number;
  children: React.ReactNode;
}
