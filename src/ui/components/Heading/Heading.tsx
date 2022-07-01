import { useClasses } from "@ui/hooks/useClasses";
import { options, styles } from ".";

interface Props {
  children: string;
  isShaded?: boolean;
  size?: typeof options.sizes[number];
  color?: typeof options.colors[number];
  weight?: typeof options.weights[number];
}

export const Heading = ({ children = "", size = "md", color = "base", weight = "bold", isShaded }: Props) => {
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
