import { useClasses } from "../../hooks/useClasses";

import { styles } from ".";

export const Card = ({ isShaded }: Props) => {
  console.log(">>>", isShaded);
  const classes = useClasses({
    styles,
    stylesClasses: {
      card: true,
      isShaded,
    },
  });
  return <div className={classes}>Card</div>;
};

interface Props {
  isShaded: boolean;
}

Card.defaultProps = {
  isShaded: true,
};
