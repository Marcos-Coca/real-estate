import { useClasses } from "../../hooks/useClasses";

import { styles } from ".";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isShaded?: boolean;
}

export const Card = ({ isShaded = true, children }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      card: true,
      isShaded,
    },
  });
  return <div className={classes}>{children}</div>;
};
