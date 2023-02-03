export const getButtonStyles = (color: string, variant: string) => {
  const colorVariable = `var(--color-brand-${color})`;
  switch (variant) {
    case "solid":
      return {
        backgroundColor: colorVariable,
        color: "var(--font-color-inverse)",
        border: "none",
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        color: colorVariable,
        border: `1px solid ${colorVariable}`,
      };
    case "text":
      return {
        backgroundColor: "transparent",
        color: colorVariable,
        border: "none",
      };
  }
};
