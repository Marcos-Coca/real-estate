"use client";

import React from "react";

import { styles } from ".";
import { useClasses } from "@ui/hooks/useClasses";
import { Paragraph } from "@ui/components/Paragraph";

import { getButtonStyles } from "./utils";
interface Props {
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
}

export const Button = ({ isDisabled, color = "primary", children, variant = "solid" }: Props) => {
  const classes = useClasses({ styles, stylesClasses: { color, button: true, variant } });
  const buttonStyles = getButtonStyles(color, variant);

  return (
    <button style={buttonStyles} disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
};
