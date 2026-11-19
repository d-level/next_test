import {ChangeEventHandler} from "react";

class TextInputProps {
  type!: string;
  name!: string;
  label!: string;
  value!: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({type, name, label, value, placeholder, required, autoComplete, onChange}: TextInputProps) {
	return (
    <label>
      {label}

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </label>
  );
}