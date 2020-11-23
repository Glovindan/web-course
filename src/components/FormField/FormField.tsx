import React, {useState} from "react";
import cn from 'clsx';

import styles from './FormField.module.pcss';

type FormFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string, name?: string) => void;

  className?: string;
  inputClassName?: string;
}

const FormField = (props: FormFieldProps): React.ReactElement => {
  const {inputClassName, name, type, placeholder, value, onChange, className} = props;
  const [focused, setFocused] = useState(false);

  const handleChangeInput = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = ev;

    onChange(value, name);
  };
  const handleFocus = (ev: React.SyntheticEvent) => setFocused(true);
  const handleBlur = (ev: React.SyntheticEvent) => {if(value == "") setFocused(false);}

  return (
    <div className={className}>
      <input
        className={inputClassName}
        name={name}
        type={type}
        value={value}
        onChange={handleChangeInput}
        onFocus={handleFocus} 
        onBlur={handleBlur}
      />
      <div className={cn(styles.placeholderWrapper, focused && styles.placeholderWrapperFocused)}>
        <span>{placeholder}</span>
      </div>
    </div>
  );

};

export default FormField;
