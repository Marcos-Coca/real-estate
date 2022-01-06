import React from "react";

import styles from "./Button.module.css";
import { useClasses } from "../../hooks/useClasses";

export function Button({ isDisabled = false, type = "primary", children }: Props) {
  const classes = useClasses({ styles, stylesClasses: { type, button: true } });

  return (
    <button disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
}

interface Props {
  /**
   * specify button colors.
   * @default 'primary'
   */
  type?: "primary" | "secondary";

  /**
   * If `true`, the button will be disabled.
   */

  isDisabled?: boolean;

  /**
   * The content of the button.
   */
  children: string;
}
