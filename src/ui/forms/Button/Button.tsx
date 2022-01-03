import React from "react";

import styles from "./Button.module.css";
import { useClasses } from "../../hooks/useClasses";

// Crear un hook para el tema de las clases que reciba los styles y un objecto con las props de estilos como segundo parametro y de ahi colocar las clases de manera generica

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

export function Button({ isDisabled = false, type = "primary", children }: Props) {
  const classes = useClasses({ styles, stylesClasses: { type, button: true } });

  return (
    <button disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
}
