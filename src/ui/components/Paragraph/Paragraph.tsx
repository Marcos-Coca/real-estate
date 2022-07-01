import { useClasses } from "../../hooks/useClasses";

import { options, styles } from ".";

interface Props {
  children: string;
  size?: typeof options.sizes[number];
  color?: typeof options.colors[number];
}

export const Paragraph = ({ children, size = "md", color = "base" }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      color,
      size,
    },
  });
  return <p className={classes}>{children}</p>;
};
