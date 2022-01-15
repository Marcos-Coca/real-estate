import { ComponentStory } from "@storybook/react";
import React, { FC } from "react";

export function getListTemplate<T extends FC<any>>(Component: T): ComponentStory<any> {
  return function ({ items, ...args }: any) {
    return items.map((item: any, index: any[]) => {
      const allProps = { ...Component.defaultProps, ...args, ...item };
      return <Component key={index} {...allProps} />;
    });
  };
}
