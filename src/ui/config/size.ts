import sizing from "@tokens/size.json";

const sizingOptions = sizing.size;

export const sizes: Record<string, string> = {
  w: "width",
  h: "height",
  minW: "minWidth",
  minH: "minHeight",
  maxW: "maxWidth",
  maxH: "maxHeight",
};

export type Size = keyof typeof sizingOptions;

export interface SizesProps {
  w?: Size;
  h?: Size;
  minW?: Size;
  minH?: Size;
  maxW?: Size;
  maxH?: Size;
}
