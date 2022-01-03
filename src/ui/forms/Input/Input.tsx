import { useFormControl } from "../../hooks/useFormControl";
import { FormControl } from "../../types/form-control";

import styles from "./Input.module.css";

interface Props extends FormControl {
  type: "text";
}

export const Input = (props: Props) => {
  const { type, ...rest } = props;
  const inputProps = useFormControl(rest);

  return <input className={styles.input} {...inputProps} type={type} />;
};
