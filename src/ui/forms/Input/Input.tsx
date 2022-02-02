import { useFormControl } from "@ui/hooks/useFormControl";
import { FormControl } from "@ui/types/form-control";

import { styles } from ".";

export const Input = (props: Props) => {
  const { type, ...rest } = props;
  const inputProps = useFormControl(rest);

  return <input className={styles.input} {...inputProps} type={type} />;
};

interface Props extends FormControl {
  type: "text";
}
