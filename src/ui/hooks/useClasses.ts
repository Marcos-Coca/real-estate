import { useEffect, useState } from "react";

import classNames from "classnames";
import { capitalize } from "../utils/capitalize";

interface Params {
  classes?: string[];
  styles?: Record<string, string>;
  stylesClasses?: Record<string, string | boolean>;
}

export const useClasses = ({ styles = {}, stylesClasses = {}, classes }: Params) => {
  const [composedClasses, setComposedClasses] = useState<string>("");

  useEffect(() => {
    setComposedClasses("");

    if (classes) {
      setComposedClasses((composedClasses) => classNames(composedClasses, classes));
    }

    const setClassWithStyles = (className: string) => {
      setComposedClasses((composedClasses) => classNames(composedClasses, styles[className]));
    };

    Object.entries(stylesClasses).forEach(([classKey, classValue]) => {
      typeof classValue === "boolean"
        ? setClassWithStyles(classKey)
        : setClassWithStyles(`${classKey}${capitalize(classValue)}`);
    });
  }, [styles, stylesClasses, classes]);

  return composedClasses;
};
