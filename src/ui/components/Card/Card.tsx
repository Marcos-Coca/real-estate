import { useClasses } from "../../hooks/useClasses";

import { styles } from ".";

export const Card = ({ isShaded, children }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      card: true,
      isShaded,
    },
  });
  return <div className={classes}>{children}</div>;
};

interface Props {
  children: any;
  isShaded: boolean;
}

Card.defaultProps = {
  isShaded: true,
};
