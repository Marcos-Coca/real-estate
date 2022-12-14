import { useFormControl } from "@ui/hooks/useFormControl";
import { FormControl } from "@ui/types/form-control";
import { useId } from "react";

import { styles } from ".";

interface Props extends FormControl {
  type: "text";
}

export const Input = ({ type, ...rest }: Props) => {
  const id = useId();
  const inputProps = useFormControl(rest);

  return (
    <div className={styles.formGroup}>
      {rest.label && <label htmlFor={`${id}-input`}>{rest.label}</label>}
      <input id={`${id}-input`} {...inputProps} type={type} />
    </div>
  );
};
