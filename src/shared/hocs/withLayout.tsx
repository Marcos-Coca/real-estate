import React from "react";
import { LAYOUTS, Layouts } from "@shared/constants/layouts";

export function withLayout<T>(WrappedCompoennt: React.FC<T>, layout: Layouts) {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    const LayoutComponent = LAYOUTS[layout];

    return (
      <LayoutComponent>
        <WrappedCompoennt {...props} />
      </LayoutComponent>
    );
  };
}
