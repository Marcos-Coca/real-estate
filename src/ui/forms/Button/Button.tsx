"use client";

import React from "react";

import { styles } from ".";
import { useClasses } from "@ui/hooks/useClasses";

import { getButtonStyles } from "./utils";
type Props = {
  /**
   * specify button colors.
   * @default 'primary'
   */
  color?: "primary" | "secondary";

  /**
   * If `true`, the button will be disabled.
   */

  isDisabled?: boolean;

  /**
   * The content of the button.
   */
  children: string;

  /**
   *  the variant of the button.
   * */
  variant?: "solid" | "outline" | "text";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ isDisabled, color = "primary", children, variant = "solid", ...rest }: Props) => {
  const classes = useClasses({ styles, stylesClasses: { color, button: true, variant } });
  const buttonStyles = getButtonStyles(color, variant);

  return (
    <button {...rest} style={buttonStyles} disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
};
