import { useEffect, useState } from "react";

import classNames from "classnames";
import { capitalize } from "../utils/capitalize";

interface Params {
  classes?: string[];
  styles?: Record<string, string>;
  stylesClasses?: Record<string, string | boolean | undefined | number>;
}

export const useClasses = ({ styles = {}, stylesClasses = {}, classes }: Params) => {
  const [composedClasses, setComposedClasses] = useState<string>("");

  useEffect(() => {
    const setClassWithStyles = (className: string) => {
      setComposedClasses((composedClasses) => classNames(composedClasses, styles[className]));
    };

    setComposedClasses("");

    if (classes) {
      setComposedClasses((composedClasses) => classNames(composedClasses, classes));
    }

    Object.entries(stylesClasses).forEach(([classKey, classValue]) => {
      if (classValue) {
        typeof classValue === "boolean"
          ? setClassWithStyles(classKey)
          : setClassWithStyles(`${classKey}${capitalize(classValue.toString())}`);
      }
    });
  }, [styles, stylesClasses, classes]);

  return composedClasses;
};
