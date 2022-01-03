import { FormControl } from "../types/form-control";

export const ariaAttr = (condition: boolean | undefined) => (condition ? true : undefined);

export const useFormControl = (control: FormControl) => {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } = control;
  return {
    ...rest,
    disabled: control.isDisabled,
    required: control.isRequired,
    invalid: control.isInvalid,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly),
  };
};
