import { spaces } from "./space";
import { sizes } from "./size";
import * as spacing from "@tokens/spacing.json";
import sizing from "@tokens/size.json";

const spacingOptions = spacing.spacing;
const sizingOptions = sizing.size;

function getStylesProps(props: Record<string, any>): Record<string, any> {
  const stylesProps: Record<string, any> = {};
  const spacesKeys = Object.keys(spaces);
  const sizesKeys = Object.keys(sizes);

  Object.keys(props).forEach((propKey) => {
    const isSpace = spacesKeys.includes(propKey);
    const isSize = sizesKeys.includes(propKey);

    if (isSpace) {
      stylesProps[spaces[propKey]] = props[propKey];
    } else if (isSize) {
      stylesProps[sizes[propKey]] = props[propKey];
    }
  });

  return stylesProps;
}

export function getStyles(props: Record<string, any>) {
  const stylesProps = getStylesProps(props);
  const stylesWithValues: Record<string, string> = {};

  Object.entries(stylesProps).forEach(([propKey, propValue]: any) => {
    const isSpacing = Object.keys(spacingOptions).includes(propValue);
    const isSizing = Object.keys(sizingOptions).includes(propValue);

    if (isSpacing) {
      stylesWithValues[propKey] = spacingOptions[propValue as keyof typeof spacingOptions].value;
    } else if (isSizing) {
      stylesWithValues[propKey] = sizingOptions[propValue as keyof typeof sizingOptions].value;
    }
  });

  return stylesWithValues;
}
