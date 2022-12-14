import { spaces } from "./space";
import * as spacing from "@tokens/spacing.json";

const spacingOptions = spacing.spacing;

function getStylesProps(props: Record<string, any>): Record<string, any> {
  const stylesProps: Record<string, any> = {};

  Object.keys(props).forEach((propKey) => {
    const isSpace = Object.keys(spaces).includes(propKey);
    if (isSpace) {
      stylesProps[spaces[propKey]] = props[propKey];
    }
  });

  return stylesProps;
}

export function getStyles(props: Record<string, any>) {
  const stylesProps = getStylesProps(props);
  const stylesWithValues: Record<string, string> = {};

  Object.entries(stylesProps).forEach(([propKey, propValue]: any) => {
    stylesWithValues[propKey] = spacingOptions[propValue as keyof typeof spacingOptions].value;
  });

  return stylesWithValues;
}
