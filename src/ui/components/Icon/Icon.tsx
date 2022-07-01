import { useClasses } from "@ui/hooks/useClasses";
import React from "react";
import { ReactSVG } from "react-svg";

import { options, styles } from ".";

interface Props {
  name: string;
  size?: typeof options.sizes[number];
}

export const Icon = ({ name, size = "md" }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      size,
    },
  });
  return <ReactSVG className={classes} src={`/icons/${name}.svg`} />;
};
