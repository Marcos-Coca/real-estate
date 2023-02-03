"use client";

import { useStyleConfig } from "@ui/hooks/useStyleConfig";
import { UIElement } from "@ui/types/ui-element";
import React from "react";

import styles from "./Grid.module.css";

import * as CSS from "csstype";

function Grid({ children, gap, templateColumns, templateRows, ...rest }: Props) {
  const style = useStyleConfig(rest);

  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: templateColumns,
    gridTemplateRows: templateRows,
    ...style,
  };

  return (
    <div style={gridStyles} className={styles.gridContainer}>
      {children}
    </div>
  );
}

interface Props extends UIElement {
  children: React.ReactNode;
  templateColumns?: CSS.Property.GridTemplateColumns;
  templateRows?: CSS.Property.GridTemplateRows;
  gap?: CSS.Property.GridGap;
}

export default Grid;
