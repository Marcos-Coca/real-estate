import { useClasses } from "@ui/hooks/useClasses";
import { options, styles } from ".";

export const Heading = ({ children, size, color, weight, isShaded }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      size,
      color,
      weight,
      isShaded,
    },
  });

  return <div className={classes}>{children}</div>;
};

interface Props {
  children: string;
  isShaded: boolean;
  size: typeof options.sizes[number];
  color: typeof options.colors[number];
  weight: typeof options.weights[number];
}

Heading.defaultProps = {
  size: "md",
  color: "base",
  weight: "bold",
  isShaded: false,
};
