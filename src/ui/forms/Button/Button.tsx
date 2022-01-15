import React from "react";

import { styles } from ".";
import { useClasses } from "../../hooks/useClasses";

export const Button = ({ isDisabled, type, children }: Props) => {
  const classes = useClasses({ styles, stylesClasses: { type, button: true } });

  return (
    <button disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
};

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

Button.defaultProps = {
  type: "primary",
  isDisabled: false,
};
