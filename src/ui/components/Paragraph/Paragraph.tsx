import { useClasses } from "../../hooks/useClasses";

import { options, styles } from ".";

export const Paragraph = ({ children, size, color }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      color,
      size,
    },
  });
  return <p className={classes}>{children}</p>;
};

interface Props {
  children: string;
  size: typeof options.sizes[number];
  color: typeof options.colors[number];
}

Paragraph.defaultProps = {
  size: "md",
  color: "base",
};
