"use client";

import { useStyleConfig } from "@ui/hooks/useStyleConfig";

import { UIElement } from "@ui/types/ui-element";
import React from "react";

import { Space, spacingOptions } from "@ui/config/space";
import * as CSS from "csstype";

export function Flex({
  children,
  align,
  alignContent,
  basis,
  direction,
  grow,
  justyfy,
  shrink,
  wrap,
  gap,
  ...rest
}: Props) {
  const configStyles = useStyleConfig(rest);

  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justyfy,
    alignItems: align,
    alignContent: alignContent,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    flexWrap: wrap,
    gap: gap ? spacingOptions[gap]?.value : 0,
    ...configStyles,
  };

  return <div style={styles}>{children}</div>;
}

interface Props extends UIElement {
  children: React.ReactNode;
  direction?: CSS.Property.FlexDirection;
  justyfy?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  wrap?: CSS.Property.FlexWrap;
  grow?: CSS.Property.FlexGrow;
  shrink?: CSS.Property.FlexShrink;
  basis?: CSS.Property.FlexBasis;
  gap?: Space;
}
