export interface FormControl {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value?: any;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
}
