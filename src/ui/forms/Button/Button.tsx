import React from "react";

import { styles } from ".";
import { useClasses } from "@ui/hooks/useClasses";

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

export const Button = ({ isDisabled, type = "primary", children }: Props) => {
  const classes = useClasses({ styles, stylesClasses: { type, button: true } });

  return (
    <button disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
};
