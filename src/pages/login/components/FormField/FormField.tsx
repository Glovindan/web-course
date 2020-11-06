import React from "react";

type FormFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;

  className?: string;
  inputClassName?: string;
  placeholderClassName?: string;
  placeholderWrapperClassName?: string;
}

const FormField = (props: FormFieldProps): React.ReactElement => {
  const {inputClassName, name, type, placeholder, value, onChange, className, placeholderClassName, placeholderWrapperClassName} = props;

  const handleChangeInput = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = ev;

    onChange(value);
  };

  return (
    <div className={className}>
      <input
        className={inputClassName}
        name={name}
        type={type}
        value={value}
        onChange={handleChangeInput}
      />
      <div className={placeholderWrapperClassName}>
        <div className={placeholderClassName}>{placeholder}</div>
      </div>
    </div>
  );

};

export default FormField;
