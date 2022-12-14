import { useRef } from "react";
import { getStyles } from "../config/getStyles";

import compare from "just-compare";

export const useStyleConfig = (props: Record<string, any>) => {
  const stylesRef = useRef({});

  const styles = getStyles(props);
  const isStyleEqual = compare(stylesRef.current, styles);

  if (!isStyleEqual) {
    stylesRef.current = styles;
  }

  return stylesRef.current;
};
