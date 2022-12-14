import * as CSS from "csstype";

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

/**
 * Types for space related CSS properties
 */
export interface SpaceProps {
  /**
   * Margin on top, left, bottom and right
   */
  m?: CSS.Property.Margin | number;
  /**
   * Margin on top
   */
  mt?: CSS.Property.Margin | number;
  /**
   * Margin on right
   */
  mr?: CSS.Property.MarginRight | number;
  /**
   * When direction is `ltr`, `me` is equivalent to `marginRight`.
   * When direction is `rtl`, `me` is equivalent to `marginLeft`.
   */
  me?: CSS.Property.MarginInlineEnd | number;
  /**
   * Margin on bottom
   */
  mb?: CSS.Property.MarginBottom | number;
  /**
   * Margin on left
   */
  ml?: CSS.Property.MarginLeft | number;
  /**
   * When direction is `ltr`, `ms` is equivalent to `marginLeft`.
   * When direction is `rtl`, `ms` is equivalent to `marginRight`.
   */
  ms?: CSS.Property.MarginInlineStart | number;
  /**
   * Margin on left and right
   */
  mx?: CSS.Property.Margin | number;
  /**
   * Margin on top and bottom
   */
  my?: CSS.Property.Margin | number;
  /**
   * Padding on top, left, bottom and right
   */
  p?: CSS.Property.Padding | number;
  /**
   * Padding on top
   */
  pt?: CSS.Property.PaddingTop | number;
  /**
   * Padding on right
   */
  pr?: CSS.Property.PaddingRight | number;
  /**
   * When direction is `ltr`, `pe` is equivalent to `paddingRight`.
   * When direction is `rtl`, `pe` is equivalent to `paddingLeft`.
   */
  pe?: CSS.Property.PaddingInlineEnd | number;
  /**
   * Padding on bottom
   */
  pb?: CSS.Property.PaddingBottom | number;
  /**
   * Padding on left
   */
  pl?: CSS.Property.PaddingLeft | number;
  /**
   * When direction is `ltr`, `ps` is equivalent to `paddingLeft`.
   * When direction is `rtl`, `ps` is equivalent to `paddingRight`.
   */
  ps?: CSS.Property.PaddingInlineStart | number;
  /**
   * Padding on left and right
   */
  px?: CSS.Property.Padding | number;
  /**
   * Padding on top and bottom
   */
  py?: CSS.Property.Padding | number;
}
