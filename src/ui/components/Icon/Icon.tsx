import { useClasses } from "@ui/hooks/useClasses";
import React from "react";
import { ReactSVG } from "react-svg";

import { options, styles } from ".";

interface Props {
  name: string;
  color?: typeof options.colors[number];
  size?: typeof options.sizes[number];
}

export const Icon = ({ name, color, size = "md" }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      size,
      color,
    },
  });

  return <ReactSVG className={`${classes} ${styles.container}`} src={`/icons/${name}.svg`} />;
};
