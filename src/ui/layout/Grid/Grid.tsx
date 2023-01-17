import { useStyleConfig } from "@ui/hooks/useStyleConfig";
import { UIElement } from "@ui/types/ui-element";
import React from "react";

import styles from "./Grid.module.css";

function Grid({ children, ...rest }: Props) {
  const style = useStyleConfig(rest);
  return (
    <div style={style} className={styles.gridContainer}>
      {children}
    </div>
  );
}

interface Props extends UIElement {
  children: React.ReactNode;
}

export default Grid;
