import { SpaceProps } from "@ui/config/space";
import { useClasses } from "@ui/hooks/useClasses";
import { useStyleConfig } from "@ui/hooks/useStyleConfig";
import { options, styles } from ".";

interface Props extends SpaceProps {
  children: string;
  isShaded?: boolean;
  size?: typeof options.sizes[number];
  color?: typeof options.colors[number];
  weight?: typeof options.weights[number];
}

export const Heading = ({ children = "", size = "md", color = "base", weight = "bold", isShaded, ...rest }: Props) => {
  const classes = useClasses({
    styles,
    stylesClasses: {
      size,
      color,
      weight,
      isShaded,
    },
  });
  const style = useStyleConfig(rest);

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
};
