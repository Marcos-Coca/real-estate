import { useClasses } from "@ui/hooks/useClasses";
import React from "react";
import { ReactSVG } from "react-svg";

import { options, styles } from ".";

export const Icon = ({ name, size }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      size,
    },
  });
  return <ReactSVG className={classes} src={`/icons/${name}.svg`} />;
};

interface Props {
  name: string;
  size: typeof options.sizes[number];
}

Icon.defaultProps = {
  size: "md",
};
