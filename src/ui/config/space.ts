import spacing from "@tokens/spacing.json";

export const spacingOptions = spacing.spacing;

export const spaces: Record<string, string> = {
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  me: "marginInlineEnd",
  mb: "marginBottom",
  ml: "marginLeft",
  ms: "marginInlineStart",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  py: "paddingY",
  px: "paddingX",
  pb: "paddingBottom",
  pl: "paddingLeft",
  ps: "paddingInlineStart",
  pr: "paddingRight",
  pe: "paddingInlineEnd",
};

export type Space = keyof typeof spacingOptions;

/**
 * Types for space related CSS properties
 */
export interface SpaceProps {
  /**
   * Margin on top, left, bottom and right
   */
  m?: Space;
  /**
   * Margin on top
   */
  mt?: Space;
  /**
   * Margin on right
   */
  mr?: Space;
  /**
   * When direction is `ltr`, `me` is equivalent to `marginRight`.
   * When direction is `rtl`, `me` is equivalent to `marginLeft`.
   */
  me?: Space;
  /**
   * Margin on bottom
   */
  mb?: Space;
  /**
   * Margin on left
   */
  ml?: Space;
  /**
   * When direction is `ltr`, `ms` is equivalent to `marginLeft`.
   * When direction is `rtl`, `ms` is equivalent to `marginRight`.
   */
  ms?: Space;
  /**
   * Margin on left and right
   */
  mx?: Space;
  /**
   * Margin on top and bottom
   */
  my?: Space;
  /**
   * Padding on top, left, bottom and right
   */
  p?: Space;
  /**
   * Padding on top
   */
  pt?: Space;
  /**
   * Padding on right
   */
  pr?: Space;
  /**
   * When direction is `ltr`, `pe` is equivalent to `paddingRight`.
   * When direction is `rtl`, `pe` is equivalent to `paddingLeft`.
   */
  pe?: Space;
  /**
   * Padding on bottom
   */
  pb?: Space;
  /**
   * Padding on left
   */
  pl?: Space;
  /**
   * When direction is `ltr`, `ps` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `ps` is equivalent to `paddingRight`.
   */
  ps?: Space;
  /**
   * Padding on left and right
   */
  px?: Space;
  /**
   * Padding on top and bottom
   */
  py?: Space;
}
